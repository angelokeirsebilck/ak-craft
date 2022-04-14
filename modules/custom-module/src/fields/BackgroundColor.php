<?php
namespace custommodule\fields;
use craft\fields\Dropdown;
use \craft\db\Query;

class BackgroundColor extends Dropdown
{

    public function init()
    {
        $this->setBackgroundColors();
        parent::init();
    }

    public static function displayName():string
    {
        return "Background Color";
    }

    protected function setBackgroundColors(): void
    {

        $backgroundColors = [
            'White' => 'white',
            'Light Yellow' => 'light',
        ];

        $this->options = [
            [
                'label' => 'Choose a color',
                'value' => '',
                'disabled' => true
            ]
        ];

        foreach ($backgroundColors as $key => $value) {
            $this->options[] = [
                'label' => $key,
                'value' => $value
            ];
        }
    }

    public function getSettingsHtml()
    {
        return;
    }
}
