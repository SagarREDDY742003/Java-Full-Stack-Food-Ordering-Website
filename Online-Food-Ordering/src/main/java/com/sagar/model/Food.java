package com.sagar.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private  String name;

    private  String description;

    private Long price;

    @ManyToOne
    private Category foodCategory;

    @Column(length = 1000) //length of image url
    @ElementCollection //create separate table for images
    private List<String> images;

    private  boolean available;

    @ManyToOne
    private Restaurant restaurant;

    private boolean isVegetarian;

    private boolean isSeasonable;

    @ManyToMany
    private List<IngredientsItem> ingredients = new ArrayList<>();

    private Date creationDate;

}
