// import React, { useState, useEffect} from 'react'
// import firestore from './firestore'

// function List () {

//     const [list,setList] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           const db = firestore.firestore();
//           const list = db.collection("postit");
//           const snapshot = await list.get()
//           .then(snapshot => {
//               if (snapshot.empty){
//                   console.log('no data matched');
//                   return;
//               }

//               const list = [];
//               snapshot.forEach(doc => {
//                   const data = doc.data();
//                   console.log('set this data => '+data)
//                   setList(data)
//               })
//           }
            
//             )

//         };
//         fetchData();
//       }, []);

//     return(
//         <div>
//             this is the list component
//         </div>
//     )
// }

// export default List