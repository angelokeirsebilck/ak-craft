<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
//    'kerotec' => [
//        'aliases' => [
//            '@web' => craft\helpers\App::env('BASE_KEROTEC'),
//        ],
//    ],
//
//    'ak' => [
//        'aliases' => [
//            '@web' => craft\helpers\App::env('BASE_AK'),
//        ],
//    ]
];
