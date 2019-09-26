package com.claim.entity;

import java.io.File;
import java.io.IOException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


@Component
public class WebServiceUtils {
	
	private static final String UPLOADED_FOLDER = "/Users/farooqchaudhry/Documents/upload_folder";
	
    @Autowired
    private JavaMailSender sender;
    
    public WebServiceUtils(JavaMailSender sender) {
    super();
    this.sender = sender;
    }
    
    public String sendMail(String to, String msg, String subject) {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setTo(to);
            helper.setText(msg);
            helper.setSubject(subject);
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error while sending mail ..";
        }
        sender.send(message);
        return "Mail Sent Success!";
    }
    

     

       
    //save multiple files to locale file system
       public void multiplesave(MultipartFile[] files, long id) throws IllegalStateException, IOException {
         
       File dir = new File(UPLOADED_FOLDER + File.separator + id ); 
     
      for (int i = 0; i < files.length; i++){ 
      MultipartFile file = files[i]; 
      try { 
          
      if (!dir.exists()) dir.mkdirs();
     
      String destpath=UPLOADED_FOLDER + File.separator + id+ File.separator+ file.getOriginalFilename(); 
      File destfile= new File(destpath);
     
      file.transferTo(destfile);
         } catch (Exception e) {
      e.printStackTrace();
       } 
      }
     
       }
       
       public void removefiles(long id, String image) {
    try {
    File file = new File(UPLOADED_FOLDER + File.separator + id+ File.separator +image+"");    
        if(file.delete()){
    System.out.println(file.getName() + " is deleted!");	
    }else{
    System.out.println("Delete operation is failed.");
    }
    } catch (Exception e) {
    e.printStackTrace();
    }
       }
}