// gapi.load("client", loadClient);
 
// function loadClient() {
//     gapi.client.setApiKey("AIzaSyBnOrw7_mzdFCWJbAu4kaP8oGuguOOjTSA");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//                 function(err) { console.error("Error loading GAPI client for API", err); });
// }

// const ytForm = document.getElementById('yt-form');
// const keywordInput = document.getElementById('keyword-input');
// const maxresultInput = document.getElementById('maxresult-input');
// const orderInput = document.getElementById('order-input');
// const videoList = document.getElementById('videoListContainer');
// /*
// YT FORM
//     state holding component
//    child components:  (can be dumb components or fn componentns)
//     - keyword input
//     - max res input
//     - order input
//     submit event that runs execute()
// video list

// as a todo, find out what gapi.load is and why you would need to use that instead 
// of just using axios call and just putting that data in to state

// */
// var pageToken = '';
 
// ytForm.addEventListener('submit', e => {
//     e.preventDefault();
//     execute();
// });
 
// function paginate(e, obj) {
//     e.preventDefault();
//     pageToken = obj.getAttribute('data-id');
//     execute();
// }
 
// // Make sure the client is loaded before calling this method.
// function execute() {
//     const searchString = keywordInput.value;
//     const maxresult = maxresultInput.value;
//     const orderby = orderInput.value;
 
//     var arr_search = {
//         "part": 'snippet',
//         "type": 'video',
//         "order": orderby,
//         "maxResults": maxresult,
//         "q": searchString
//     };
 
//     if (pageToken != '') {
//         arr_search.pageToken = pageToken;
//     }
 
//     return gapi.client.youtube.search.list(arr_search)
//     .then(function(response) {
//         console.log("response", response);
//         // Handle the results here (response.result has the parsed body).
//         const listItems = response.result.items;
//         if (listItems) {
//             let output = '<h4>Videos</h4><ul>';
 
//             listItems.forEach(item => {
//                 const videoId = item.id.videoId;
//                 const videoTitle = item.snippet.title;
//                 output += `
//                     <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>${videoTitle}</p></li>
//                 `;
//             });
//             output += '</ul>';
 
//             if (response.result.prevPageToken) {
//                 output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
//             }
 
//             if (response.result.nextPageToken) {
//                 output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
//             }
 
//             // Output list
//             videoList.innerHTML = output; 
//         }
//     },
//     function(err) { console.error("Execute error", err); });
// }
