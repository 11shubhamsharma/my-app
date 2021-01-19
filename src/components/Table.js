import React from 'react'
import Columns from './Columns';

 function Table (){
     return(
         <table>
             <tbody>
                 <tr>
                     
                     <Columns></Columns>

                 </tr>
             </tbody>
         </table>
     )

     // first time id is in div this is wrong so use fragment
 }
 export default Table