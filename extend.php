<?php

/*
 * This file is part of justoverclock/igdb-api.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\IgdbApi;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/games', 'justoverclock/igdb-api'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('justoverclock-igdb-api.RawgApiKey', 'justoverclock-igdb-api.RawgApiKey')
        ->serializeToForum('justoverclock-igdb-api.composerAlert', 'justoverclock-igdb-api.composerAlert', 'boolval', true)
];
