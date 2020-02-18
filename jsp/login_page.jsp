<%-- <%@ page import="java.sql.*" %> --%>
<%-- <html>

<body>     --%>
  <%
  String s=request.getParameter("val");
      if(s==null || s.trim().equals("") {
        out.print("Please enter id");
    } else {
      int id=Inyerger.parseInt(s);
      out.print(id);
      try{
        Class.forName("com.mysql.jdbc.Driver");
        Connection con=DriverManager,getConnection("jdbc:mysql://localhost:192.168.1080/mdb",  "root", "root");
        PreparedStatement ps=con.prepareStatement("select * from emp where id =?");
        ps.setInt(1,id);
        ResultSet rs=ps.executeQuery();
        while(rs.next()){
          out.print(rs.getInt(1)+ "" +rs.getString(2));
        }
        con.close();
      } catch(Exception e) {e.printStackTrace();}
    }

  string password=request.getParameter("password");

  %>
