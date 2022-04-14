<?php

/**
 * BOA module for Craft CMS 3.x
 */
namespace custommodule;

use custommodule\fields\BackgroundColor;
use Yii\base\Module;
use Yii\base\Event;
use craft\events\RegisterComponentTypesEvent;
use craft\services\Fields;

class CraftModule extends Module
{

    public function init()
    {
        parent::init();
        $this->_registerCustomFieldTypes();
    }

    private function _registerCustomFieldTypes() {
        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = BackgroundColor::class;
            }
        );
    }
}

