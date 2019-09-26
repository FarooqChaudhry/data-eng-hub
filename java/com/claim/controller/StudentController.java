package com.claim.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.claim.entity.Article;
import com.claim.entity.HandleMail;
import com.claim.entity.Student;
import com.claim.repository.ArticleRepository;
import com.claim.repository.StudentRepository;
import com.claim.entity.WebServiceUtils;



@RestController
@CrossOrigin //just for claim don't do this 
public class StudentController {
	

	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private ArticleRepository articleRepository;
	
	@Autowired
	private WebServiceUtils webServiceUtils;
	

		
	
	@RequestMapping(value="/submitStudentDetails", method = RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE
			)
	public void submitStudentDetails(@RequestBody Student student, @ModelAttribute HandleMail mail, Model model) {
		studentRepository.save(student);
		
		model.addAttribute("msg", "Contact Us");
		model.addAttribute("mail", new HandleMail());
		model.addAttribute("subject", "Thank you from DataEngHub");

		String text = "Thank you for signing up to Data Eng Hub";
		webServiceUtils.sendMail(student.getEmail(), text , "Thank you from DataEngHub");

		
		System.out.println(student);
	}
	
	@RequestMapping(value="/submitArticle", method = RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE
			)
	public void submitArticle(@RequestBody Article article) {
		articleRepository.save(article);
		
		System.out.println(article);
	}
	
	
	@RequestMapping(value="/findStudentById", produces=MediaType.APPLICATION_JSON_VALUE, method= RequestMethod.GET)
			@ResponseBody

			private ResponseEntity<Student> findStudent( String email){
			Student	student = this.studentRepository.findById(email).get();
				return new ResponseEntity<>(student, HttpStatus.OK);
		
	}
	

	
	@RequestMapping(value="/login", method = RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE
			)
	public ResponseEntity<Student> login(@RequestBody Student student) {
		
		Optional<Student> studentdb = this.studentRepository.findById(student.getEmail());
		
		if (!studentdb.isPresent())
		{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		
		if (studentdb.get().getPassword().equals(student.getPassword())) {
			return new ResponseEntity<>(studentdb.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			
		}

	}
	
	@RequestMapping(value="/findAllStudents", produces=MediaType.APPLICATION_JSON_VALUE, method= RequestMethod.GET)
	@ResponseBody

	private  ResponseEntity<List<Student>> findAllStudents(){
		 List<Student> students =  this.studentRepository.findAll();
		return new ResponseEntity<>(students, HttpStatus.OK);

	}
	
	@RequestMapping(value="/findAllArticles", produces=MediaType.APPLICATION_JSON_VALUE, method= RequestMethod.GET)
	@ResponseBody

	private  ResponseEntity<List<Article>> findAllArticles(@RequestParam Boolean isArticle){
		 List<Article> articles =  this.articleRepository.findByIsArticle(isArticle);
		return new ResponseEntity<>(articles, HttpStatus.OK);

	}
	
	@RequestMapping(value="/findByWordSearch",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    private ResponseEntity<List<Article>>getArticlesBySearchWord(@RequestParam String searchWord){
        List<Article> articles = (List<Article>) this.articleRepository.getArticlesBySearchWord(searchWord);
        System.out.println(articles);
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }
	
	

}
