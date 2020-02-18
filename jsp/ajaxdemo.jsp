<% page import="java.sql.*" %>

<%
  String s=request.getParamenter("val");
  if(s==null || s.trim().equals("")){
    out.print("Please enter id");
  } else{
    int id=Integer.parseInt(s);
    out.print(id);
    try{
      Class.forName("com.mysql.jdbc.Driver");
      Connection con=DriverManager.getConnection("jdbc:mysql://localhost:192.168.1080/mdb", "root", "root");
      PreparedStatement ps=con.prepareStatement("select * from emp where id=?");  
    }
  }
