 function Ajax (obj){
      //默认参数
      var ajaxData = {
          type:obj.type||"get",
          url:obj.url||"",
          async:obj.async||"true",
          data:obj.data||null,
          dataType:obj.dataType||"text",
          contentType:obj.contentType||"application/x-www-form-urlencoded",
          beforeSend:obj.beforeSend || function(){}, 
          success:obj.success || function(){}, 
          error:obj.error || function(){}     
      }
      ajaxData.beforeSend();//执行ajax之前的方法
      var xhr = createxmlHttpRequest();   //获取Ajax对象
      xhr.responseType = ajaxData.dataType;//设置参数类型   json/test
      if(ajaxData.type=="post"){  //区分post和get
          /**
              获取请求
              参数:
                  1.请求类型
                  2.请求URL
                  3.是否异步 true是异步
          **/
          xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);
          //设置请求头
          xhr.setRequestHeader("Content-Type",ajaxData.contentType);
          //发起请求
          xhr.send(converData(ajaxData.data)); 
      }else{
          xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);
          xhr.send(converData(ajaxData.data));
      }   
      //获取返回参数
      xhr.onreadystatechange = function(){
          if(xhr.readyState==4){
              if(xhr.status ==200){   //成功
                  ajaxData.success(xhr);
              }else{  //失败
  
                  ajaxData.error(xhr.status);         
              }       
          }   
      }
      
      //获取ajax对象
      function createxmlHttpRequest() {  
          if (window.ActiveXObject) {  
              return new ActiveXObject("Microsoft.XMLHTTP");  
          } else if (window.XMLHttpRequest) {  
              return new XMLHttpRequest();  
          }  
      } 
      //拼接参数
      function converData(data){
          if(typeof data==='object'){
              var resules = [];
              for(var item in data){              
                  var resule = item+"="+data[item];
                  resules.push(resule);
              }
              return resules.join("&");       
          }else{      
              return data;        
          }   
}
}