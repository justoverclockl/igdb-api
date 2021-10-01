# IGDB Api

![License](https://img.shields.io/badge/license-0BSD-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/igdb-api.svg)](https://packagist.org/packages/justoverclock/igdb-api) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/igdb-api.svg)](https://packagist.org/packages/justoverclock/igdb-api)

A [Flarum](http://flarum.org) extension. Igdb Api for Videogames

![1JK2KZZ2ot](https://user-images.githubusercontent.com/79002016/135415353-4ed5c971-9541-4cdf-9a00-ae90d89e963e.gif)

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
