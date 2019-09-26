package com.claim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.claim.entity.Article;

@Repository
public interface ArticleRepository  extends JpaRepository<Article, Long>{
	
	List<Article> findByIsArticle(Boolean isArticle);
	
	@Query("FROM Article WHERE title like %?1%")
    List<Article> getArticlesBySearchWord(String searchWord);
	
	
}
	

