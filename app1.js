// const cafeList = document.querySelector('#cafe-list');
// const form = document.querySelector('#database1');
// // var docRef = db.collection("question1").doc("q1");

// // docRef.get().then(function(doc) {
// //     if (doc.exists) {
// //         console.log("Document data:", doc.data());
// //         let i = document.createElement('input');
// //         i.type = doc.data().name;
// //         i.id = "name";
// //         i.placeholder = doc.data()."1";
// //         form.appendChild(i);
// //     } else {
// //         // doc.data() will be undefined in this case
// //         console.log("No such document!");
// //     }
// // }).catch(function(error) {
// //     console.log("Error getting document:", error);
// // });

// // create element & render cafe
// function renderCafe(doc){
//     let li = document.createElement('li');
//     let name = document.createElement('span');
//     let city = document.createElement('span');
//     let cross = document.createElement('div');

//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().name;
//     city.textContent = doc.data().city;
//     cross.textContent = 'x';

//     li.appendChild(name);
//     li.appendChild(city);
//     li.appendChild(cross);

//     cafeList.appendChild(li);

//     // deleting data
//     cross.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute('data-id');
//         db.collection('cafes').doc(id).delete();
//     });
// }

// // getting data
// // db.collection('cafes').orderBy('city').get().then(snapshot => {
// //     snapshot.docs.forEach(doc => {
// //         renderCafe(doc);
// //     });
// // });

// // saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('form1').add({
//         comment: form.location.value,
//         uname: form.name.value
//     });
//     form.name.value = '';
//     form.name.value = '';
// });

// // real-time listener
// // db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
// //     let changes = snapshot.docChanges();
// //     changes.forEach(change => {
// //         console.log(change.doc.data());
// //         if(change.type == 'added'){
// //             renderCafe(change.doc);
// //         } else if (change.type == 'removed'){
// //             let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
// //             cafeList.removeChild(li);
// //         }
// //     });
// // });

// // updating records (console demo)
// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
// //     name: 'mario world'
// // });

// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
// //     city: 'hong kong'
// // });

// // setting data
// // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
// //     city: 'hong kong'
// // });

const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#database1');
// var docRef = db.collection("question1").doc("q1");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//         let i = document.createElement('input');
//         i.type = doc.data().name;
//         i.id = "name";
//         i.placeholder = doc.data()."1";
//         form.appendChild(i);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('form1').add({
        // comment: form.location.value,
        // uname: form.name.value,
        // date:form.date.value,
        // veh_no:form.Vechicalnumber.value,
        Vechicalnumber:form.Vechicalnumber.value,
        Amountofwaste:form.Amountofwaste.value,
        nameofperson:form.name.value,
        location:form.location.value,
        date:form.date.value
    
});

    console.log('123');
    form.Vechicalnumber.value ='';
    form.Amountofwaste.value ='';
    form.name.value='';
    form.location.value = '';
    form.date.value='';
})