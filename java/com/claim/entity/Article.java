package com.claim.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="article")
public class Article {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private long id;
	@Column(name="title")
	private String title;
	@Column(name="date")
	private String date;
	@Column(name="author_first_Name")
	private String authorFirstName;
	@Column(name="author_last_Name")
	private String 	authorlastName;
	@Column(name="article_body",length = 8000)
	private String articleBody;
	@Column(name="is_article")
	private Boolean isArticle;

	
	


	public Boolean getIsArticle() {
		return isArticle;
	}
	public void setIsArticle(Boolean isArticle) {
		this.isArticle = isArticle;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getAuthorFirstName() {
		return authorFirstName;
	}
	public void setAuthorFirstName(String authorFirstName) {
		this.authorFirstName = authorFirstName;
	}
	public String getAuthorlastName() {
		return authorlastName;
	}
	public void setAuthorlastName(String authorlastName) {
		this.authorlastName = authorlastName;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getArticleBody() {
		return articleBody;
	}
	public void setArticleBody(String articleBody) {
		this.articleBody = articleBody;
	}
	
	


}
