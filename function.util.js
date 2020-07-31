// export function createScriptTag (accessToken){
//     fetch('https://plano-01.myshopify.com//admin/api/2020-07/script_tags.json', {
//         method: 'post',
//         credentials: 'include',
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//         },
//         body: {
//             "script_tag": {
//                 "event": "onload",
//                 "src": "http://yourjavascript.com/30206737021/test.js"
//             }
//         }
//     })
//         .then(
//             function (response) {
//                 if (response.status !== 200) {
//                     console.log('Looks like there was a problem. Status Code: ' +
//                         response.status);
//                     return;
//                 }

//                 // Examine the text in the response
//                 response.json().then(function (data) {
//                     console.log(data);
//                 });
//             }
//         )
//         .catch(function (err) {
//             console.log('Fetch Error :-S', err);
//         });
// }