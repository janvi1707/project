const form = document.querySelector('#database2');
// var docRef = db.collection("question1").doc("q1");
//Amountofoutgoingwaste_Segmented
// Amountofoutgoingwaste_Mixed
// outputwaste
// location
// Time
// Date


// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('form3').add({
       Amountofoutgoingwaste_Segmented:form.Amountofoutgoingwaste_Segmented.value,
        Amountofoutgoingwaste_Mixed:form.Amountofoutgoingwaste_Mixed.value,
        outputwaste:form.outputwaste.value,
        location:form.location.value,
        Time:form.Time.value,
        Date:form.Date.value
    
});

    console.log('123');
    form.Amountofoutgoingwaste_Segmented.value ='';
    form.Amountofoutgoingwaste_Mixed.value ='';
    form.outputwaste.value='';
    form.location.value = '';
    form.Time.value='';
    form.Date.value='';
})