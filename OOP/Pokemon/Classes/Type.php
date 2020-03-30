<?php


class Type{
    public const NORMAL = ['Normal', [], ['Rock', 'Steel'], ['Ghost']];
    public const FIRE = ['Fire', ['Grass', 'Ice', 'Bug','Steel'], ['Fire', 'Water', 'Rock', 'Dragon'], []];
    public const WATER = ['Water', ['Fire', 'Ground', 'Rock'], ['Water', 'Grass', 'Dragon'], []];
    public const ELECTRIC = ['Electric', ['Water', 'Flying'], ['Electric', 'Grass', 'Dragon'], ['Ground']];
    public const GRASS = ['Grass', ['Water', 'Ground', 'Rock'], ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'], []];
    public const ICE = ['Ice', ['Grass', 'Ground', 'Flying', 'Dragon'], ['Fire', 'Water', 'Ice', 'Steel'], []];
    public const FIGHTING = ['Fighting', ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'], ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'], []];
    public const POISON = ['Poison', ['Grass', 'Fairy'], ['Poison', 'Ground', 'Rock', 'Ghost'], ['Steel']];
    public const GROUND = ['Ground', ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'], ['Grass', 'Bug'], ['Flying']];
    public const FLYING = ['Flying', ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Steel'], []];
    public const PSYCHIC = ['Psychic', ['Fighting', 'Poison'], ['Psychic'], ['Dark']];
    public const BUG = ['Bug', ['Grass', 'Psychic', 'Dark'], ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'], []];
    public const ROCK = ['Rock', ['Fire', 'Ice', 'Flying', 'Bug'], ['Fighting', 'Ground', 'Steel'], []];
    public const GHOST = ['Ghost', ['Psychic', 'Ghost'], ['Dragon'], ['Normal']];
    public const DRAGON = ['Dragon', ['Dragon'], ['Steel'], ['Fairy']];
    public const DARK = ['Dark', ['Psychic', 'Ghost'], ['Fighting', 'Dark', 'Fairy'], []];
    public const STEEL = ['Steel', ['Ice', 'Rock', 'Fairy'], ['Fire', 'Water', 'Electric', 'Steel'], []];
    public const FAIRY = ['Fairy', ['Fighting', 'Dragon', 'Dark'], ['Fire', 'Poison', 'Steel'], []];


}