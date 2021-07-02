var sql=require('mssql');

var dbconfig={
	server:"dvertex.czpxspzvruyq.ap-south-1.rds.amazonaws.com",
	user:"loni",
	password:"Loni$@123",
	database:"Loni",
	port:1433,
	options:{
		encrypt: false
	}
};
function getList(){var conn=new sql.ConnectionPool(dbconfig);
conn.connect((err)=>{
	if(err) throw err;
	var req=new sql.Request(conn);
	req.query("select fuel_type, quantity from SW_Fuel_Consumption "  , (err,res)=>{
		if (err) throw err;
		else	
		console.log(res.recordset);
		
	});
	
	req.query("select CollectedAmount from NG_UCC_Collection_Records where Date ='GETDATE'" , (err,res)=>{
	 if (err) throw err;
	           else	
	 	     console.log(res.recordset);	
	 });
	   req.query("SELECT COUNT (SRNO) from NG_UCC_Customer_Master where Date='GETDATE'" , (err,res)=>{
	          if (err) throw err;
	 	   else	
	 	   console.log(res.recordset);	
	 });
	/* req.query("select status from [dbo].[NG_Compliant_Registration]" , (err,recordset)=>{
	if (err) throw err;
		else	
		console.log(recordset);	
	});
	req.query("select status from [dbo].[NG_Compliant_Registration]" , (err,recordset)=>{
	if (err) throw err;
		else	
		console.log(recordset);	
	}); */
});
}getList();


//module.exports=getList;