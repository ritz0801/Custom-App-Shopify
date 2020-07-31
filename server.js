require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
// const { createScriptTag } = require('./function.util');
const axios = require('axios')


dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;
const TEMP_CONTENT = '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 plano-01.myshopify.com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 plano-01.myshopify.com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 plano-01.myshopify.com'

async function  createScriptTag(accessToken, shop) {
    console.log("in func create script tag: ", accessToken)
    const requestBody = {
        script_tag: {
            event: "onload",
            src: "https://storage.googleapis.com/itedu-bucket/test-plano.js"
        }
    }


    await axios({
        method: 'POST', 
        url: `https://${shop}/admin/api/2020-07/script_tags.json`,
        // withCredentials: true,
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessToken,
            'Content-Length': (JSON.stringify(requestBody)).length,
            'Host': shop
        },
        data: JSON.stringify(requestBody)
    })
        .then(function (response) {
            //handle success
            console.log("success: ")
            return response;
        })
        .catch(function (response) {
            // handle error
            console.log("ERROR: ")
            throw response;
        });
}


app.prepare().then(() => {
    const server = new Koa();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];

    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['read_products,write_products,write_script_tags'],
            async afterAuth(ctx) {
                const { shop, accessToken } = ctx.session;
                console.log("after auth: ", accessToken, shop)
                try {
                    console.log("before create script tag")

                    await createScriptTag(accessToken, shop)
                } catch (err){
                    console.log("after create script tag err")
                    // console.log("ERROR: ", err)
                }

                ctx.redirect('/');
            },
        }),
    );

    server.use(verifyRequest());
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
        return
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});