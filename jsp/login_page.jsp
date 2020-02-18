<%-- <%@ page import= "java.io.*, java.util.* ,java.sql.*" %>
<%@ page import= "javax.serverlet.http.*,javax.serverlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix = "sql"%> --%>
<% page import= "java.sql.*"%>

<%
  String s=request.getParameter("val");
  if(s==null || s.trim().equals("")) {
      out.print("Please enter id");
  } else {
    int id=Interger.parseInt(s);
    out.print(id);
    try{
      Class.forName("com.mysql.jdbc.Driver");
      Connection con=DriverManager.getConnection("jdbc:mysql://localhost:192.168.1.103/mdb", "root", "root");
      PreparedStatement ps=con.prepareStatement("select * from emp where id =?");
      ps.setInt(1,id);
      ResultSet rs=ps.executeQuery();
      while(rs.next()){
        out.print(rs.getInt(1)+ "" +rs.getString(2));
      }
        con.close();
      } catch(Exception e){e.printStackTrace();}
    }

  // string password=request.getParameter("password");
%>
