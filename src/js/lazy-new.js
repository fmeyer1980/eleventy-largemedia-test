// function lazyLoad(elements) {

//     elements.forEach(picture => {
//       if (picture.intersectionRatio > 0) {
  
//         // gather all the image and source elements in this picture
//         var sources = picture.children;
  
//         for (var s = 0; s < sources.length; s++) {
//           var source = sources[s];
  
//           // set a new srcset on the source elements 
//           if (sources.hasAttribute("srcset")) {
//             source.setAttribute("srcset", ONE_OF_OUR_BIGGER_IMAGES);
//           }
//           // or a new src on the img element
//           else {
//             source.setAttribute("src", ONE_OF_OUR_BIGGER_IMAGES);
//           }
//         }
  
//         // stop observing this element. Our work here is done!
//         observer.unobserve(item.target);
//       };
//     });

//       // remove the lazy class when the full image is loaded to unblur
// source.addEventListener('load', image => {
//     image.target.closest("picture").classList.remove("lazy")
// }, false);
  
//   };

