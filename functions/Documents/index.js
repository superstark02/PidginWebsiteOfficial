module.exports = ({ name, gender, classA, dob, age, nationality, religion ,adress, adress2, city, country, state , pinCode, phoneNumber, email, staffChild, singleParent, orphan, treatment, schoolTransport, distanceFromSchool, category, sibling, siblingName, admissionNumer, classSectionSibling }) => {
   return `
<!doctype html>
<html>

<head>
   <meta charset="utf-8">
   <title>PDF Result Template</title>
   <style>
      body,
      html {
         margin: 0;
         font-size: 16px;
         font-family: Defualt;
         font-weight: 400;
         line-height: 1.8em;
         color: #202020;
         padding: 20px 0px;
      }

      .invoice-box {
         max-width: 800px;
         margin: auto;
         padding: 30px;
         border: 1px solid #eee;
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 16px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica';
         color: #555;
      }

      .margin-top {
         margin-top: 50px;
      }

      .justify-center {
         text-align: center;
      }

      .invoice-box table {
         width: 100%;
         line-height: inherit;
         text-align: left;
      }

      .invoice-box table td {
         padding: 5px;
         vertical-align: top;
      }

      .invoice-box table tr td:nth-child(2) {
         text-align: right;
      }

      .invoice-box table tr.top table td {
         padding-bottom: 20px;
      }

      .invoice-box table tr.top table td.title {
         font-size: 45px;
         line-height: 45px;
         color: #333;
      }

      .invoice-box table tr.information table td {
         padding-bottom: 40px;
      }

      .invoice-box table tr.heading td {
         background: #eee;
         border-bottom: 1px solid #ddd;
         font-weight: bold;
      }

      .invoice-box table tr.details td {
         padding-bottom: 20px;
      }

      .invoice-box table tr.item td {
         border-bottom: 1px solid #eee;
      }

      .invoice-box table tr.item.last td {
         border-bottom: none;
      }

      .invoice-box table tr.total td:nth-child(2) {
         border-top: 2px solid #eee;
         font-weight: bold;
      }

      .standard-input {
         margin: 10px 0px;
         padding: 10px;
         outline: none;
      }

      .standard-button {
         color: white;
         background-color: #00b6c7;
         padding: 10px;
         border: none;
         outline: none;
         cursor: pointer;
      }

      .wrap {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   </style>
</head>

<body>
   <div class="invoice-box">
      <div style="display: flex;justify-content: space-between;" >
         <div>
            <h1>Common Form</h1> 
         </div>
         <div>
            <img width="80px" src="data:image/png;base64,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" />
         </div>
      </div>
      <h3>Particulars of Child</h3>
      <div>
         <label>
            Name Of The Student
         </label>
      </div>
      <input class="standard-input" name="name" style="width: 100%" value="${name}" ></input>

      <div class="wrap" style="justify-content: space-evenly; flex-wrap: wrap">
         <div style="width: 33%">
            <div>
               <label style="font-size:13px">
                  Class Appplying For:
               </label>
            </div>
            <div>
               <input class="standard-input" name="age" style=" width: 80%" value="${classA}"></input>
            </div>
         </div>

         <div style="width:33%">
            <div>
               <label>
                  Gender
               </label>
            </div>
            <div>
               <input class="standard-input" name="age" style=" width: 80%" value="${gender}"></input>
            </div>
         </div>

         <div style="width:33%">
            <div>
               <label>
                  Date Of Birth
               </label>
            </div>
            <div>
               <input class="standard-input" name="age" style=" width: 80%" value="${dob}"></input>
            </div>
         </div>
      </div>

      <div class="wrap" style="justify-content: space-evenly; flex-wrap: wrap">
         <div style="width:33%">
            <div>
               <label>
                  Age
               </label>
            </div>
            <div>
               <input class="standard-input" name="age" style=" width: 80%" value="${age}"></input>
            </div>
         </div>

         <div style="width:33%">
            <div>
               <label>
                  Nationality
               </label>
            </div>
            <div>
               <input name="nationality" class="standard-input" style="width:80%" value="${nationality}"></input>
            </div>
         </div>

         <div style="width:33%">
            <div>
               <label>
                  Religion
               </label>
            </div>
            <div>
               <input name="religion" class="standard-input" style="width:80%" value="${religion}"></input>
            </div>
         </div>
      </div>


      <h3>Particulars of Residence</h3>
      <div style="width: 100%">
         <div>
            <label>
               Residential Address
            </label>
         </div>
         <div>
            <input class="standard-input" name="adress" style="width:100%" value="${adress}" ></input>
         </div>
         <div>
            <input class="standard-input" name="adress2" style="width:100%" value="${adress2}" ></input>
         </div>
      </div>
      <div class="wrap" style="justify-content:space-evenly; flex-wrap:wrap">

         <div style="width:23%">
            <div>
               <label>
                  City
               </label>
            </div>
            <div>
               <input class="standard-input" name="city" style="width:100%" value="${city}"></input>
            </div>
         </div>

         <div style="width:23%">
            <div>
               <label>
                  State
               </label>
            </div>
            <div>
               <input class="standard-input" name="state" style="width: 100%" value="${state}"></input>
            </div>
         </div>

         <div style="width:23%">
            <div>
               <label>
                  Pin-Code
               </label>
            </div>
            <div>
               <input class="standard-input" name="pinCode" style="width:100%" value="${pinCode}"></input>
            </div>
         </div>

         <div style="width:23%">
            <div>
               <label>
                  Country
               </label>
            </div>
            <div>
               <input class="standard-input" name="country" style="width:100%" value="${country}"></input>
            </div>
         </div>
      </div>

      <div class="wrap" style="justify-content: flex-start; flex-wrap:wrap">

         <div style="width: 33%; margin-right:10px">
            <div>
               <label>
                  Phone Number
               </label>
            </div>
            <div>
               <input class="standard-input" name="phoneNumber" style="width:100%" value="${phoneNumber}"></input>
            </div>
         </div>

         <div style="width:33%">
            <div>
               <label>
                  Email
               </label>
            </div>
            <div>
               <input type="email" class="standard-input" name="email" style="width:100%" value="${email}"></input>
            </div>
         </div>
      </div>

      <h3>Other Details</h3>
      <div class="wrap" style="justify-content: space-around; flex-wrap: wrap">
         <div>
            <div>
               <label><b>Ward of School Staff</b></label>
            </div>
            <div class="wrap" style="justify-content:flex-start">
               <input class="standard-input" name="city" style="width:100%" value="${staffChild}" ></input>
            </div>
         </div>

         <div>
            <div>
               <label><b>Child of Single Parent</b></label>
            </div>
            <div class="wrap" style="justify-content:flex-start">
               <input class="standard-input" name="city" style="width:100%" value="${singleParent}" ></input>
            </div>
         </div>

         <div>
            <div>
               <label><b>Is Orphan</b></label>
            </div>
            <div class="wrap" style=" justify-content: flex-start">
               <input class="standard-input" name="city" style="width:100%" value="${orphan}" ></input>
            </div>
         </div>

         <div>
            <div>
               <label><b>Student Undergoing Any Treatment</b></label>
            </div>
            <div class="wrap" style="justify-content:flex-start">
               <input class="standard-input" name="city" style="width:100%" value="${treatment}" ></input>
            </div>
         </div>

         <div>
            <div>
               <label><b>School Transport Required</b></label>
            </div>
            <div class="wrap" style="justify-content:flex-start">
               <input class="standard-input" name="city" style="width:100%" value="${schoolTransport}" ></input>
            </div>
         </div>

      </div>

      <div>
         <div style="width:23%">
            <div>
               <label>
                  Distance From School (Km)
               </label>
            </div>
            <div>
               <input class="standard-input" type="number" name="distanceFromSchool" style="width:100%" value="${distanceFromSchool}"></input>
            </div>
         </div>
      </div>

      <div>
         <div>
            <label><b>Category</b></label>
         </div>

         <div>
            <input class="standard-input" name="city" style="width:100%" value="${category}" ></input>
         </div>
      </div>

      <h3 style="width:100%">Sibling Details</h3>
      <div style="margin:20px 0px">
         <div>
            <label><b>Sibling Present In Any Of The Selected Schools</b></label>
         </div>
         <div class="wrap" style="justify-content:flex-start">
            <input class="standard-input" name="city" style="width:100%" value="${sibling}" ></input>
         </div>
      </div>

      <div>
         <div>
            <div>
               <label>
                  Sibbling Name
               </label>
            </div>
            <input class="standard-input" style="width:100%" placeholder="Sibling Name" value="${siblingName}" ></input>
         </div>
         <div class="wrap" style="justify-content:flex-start;flex-wrap:wrap">

            <div style="width: 47%; margin-right: 10px">
               <div>
                  <label>
                     Admission No.
                  </label>
               </div>
               <div>
                  <input class="standard-input" style="width:100%" placeholder="Admission No." value="${admissionNumer}" ></input>
               </div>
            </div>

            <div style="width:47%">
               <div>
                  <label>
                     Class/Section
                  </label>
               </div>
               <div>
                  <input class="standard-input" style="width:100%" value="${classSectionSibling}"></input>
               </div>
            </div>
         </div>
      </div>
   </div>
</body>

</html>
    `;
};