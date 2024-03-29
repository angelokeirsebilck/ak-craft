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

    'aliases' => [
        '@web' => craft\helpers\App::env('BASE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
        '@doBaseUrl' => craft\helpers\App::env('DO_BASE_URL'),
        '@webAk' => craft\helpers\App::env('BASE_AK'),
        '@webKerotec' => craft\helpers\App::env('BASE_KEROTEC'),
    ],

    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,

    // The URI segment that tells Craft to load the control panel
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

    // The secure key Craft will use for hashing and encrypting data
    'securityKey' => App::env('SECURITY_KEY'),

    // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode' => $isDev,

    // Whether administrative changes should be allowed
    'allowAdminChanges' => $isDev,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,

    'headlessMode' => false,

    'extraFileKinds' => [
        'svg' => [
            'label' => 'SVG',
            'extensions' => ['svg']
        ],
        'MP4' => [
            'label' => 'MP4',
            'extensions' => ['mp4']
        ],
        'WebM' => [
            'label' => 'WebM',
            'extensions' => ['webm']
        ],
        'PNG' => [
            'label' => 'PNG',
            'extensions' => ['png']
        ]
    ],

    'errorTemplatePrefix' => '_errors/'
];
