# Rawg Api integration for Flarum

![License](https://img.shields.io/badge/license-0BSD-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/igdb-api.svg)](https://packagist.org/packages/justoverclock/igdb-api) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/igdb-api.svg)](https://packagist.org/packages/justoverclock/igdb-api)

A [Flarum](http://flarum.org) extension. Igdb Api for Videogames, Retrieve game ratings, image, description, genres and metacritic score directly from your discussion title, and display a custom page with all new and upcoming videogames.

![1111](https://user-images.githubusercontent.com/79002016/135722155-cf77febc-f69a-4e98-8fa0-fb36630cad97.png)

![2](https://user-images.githubusercontent.com/79002016/135722162-4030865b-1e4d-4219-9f79-98037e0367ac.png)


## Usage

Make sure that the title of your discussion contain ONLY the videogame name (e.g. Call of duty modern warfare) that exist into rawg database, otherwise the extension will show a normal discussion without game details.

Example of discussions title:

- Far Cry 6 => accepted
- Far Cry 6 is a good game => not accepted

## Installation

Install with composer:

```sh
composer require justoverclock/igdb-api:"*"
```

## Updating

```sh
composer update justoverclock/igdb-api:"*"
php flarum cache:clear
```
