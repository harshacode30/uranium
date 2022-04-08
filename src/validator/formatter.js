let trim = function(){
    console.log('The result after trimming the string is :' + ' uraniumplus batch  '.trim() + '.')
   }
   
   let changetoLowerCase = function() {
       console.log('The result after using toLowerCase function is :', 'harSHA'.toLowerCase())
   }
   
   let changeToUpperCase = function() {
       console.log('The result after using toUpperCase function is ', 'MSDHoni'.toUpperCase())    
   }
   
   module.exports.trimString = trim
   module.exports.changeCaseToLower = changetoLowerCase
   module.exports.changeCaseToUpper = changeToUpperCase