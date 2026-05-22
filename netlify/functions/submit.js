exports.handler = async (event) => { 
   try { 
     const body = JSON.parse(event.body); 
 
     const response = await fetch("https://whitebricks.com/tsacademy.php", { 
       method: "POST", 
       headers: { 
         "Content-Type": "application/json", 
       }, 
       body: JSON.stringify(body), 
     }); 
 
     const data = await response.json(); 
 
     return { 
       statusCode: 200, 
       body: JSON.stringify(data), 
     }; 
   } catch (error) { 
     return { 
       statusCode: 500, 
       body: JSON.stringify({ 
         message: "Something went wrong", 
         error: error.message, 
       }), 
     }; 
   } 
 }; 
