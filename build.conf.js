module.exports = {
    module: {
        name: 'pipSplit',
        styles: 'split'
    },
    build: {
        js: true,
        ts: false,
        html: false,
        css: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../pip-webui-test/dist/**/*',
            '../pip-webui-lib/dist/**/*',
            '../pip-webui-css/dist/**/*',
            '../pip-webui-csscomponents/dist/**/*',
            '../pip-webui-services/dist/**/*',
            // '../pip-webui-rest/dist/**/*',
            // '../pip-webui-controls/dist/**/*',
             '../pip-webui-nav/dist/**/*',
            '../pip-webui-layouts/dist/**/*',             
            // '../pip-webui-pictures/dist/**/*',
            // '../pip-webui-locations/dist/**/*',
            // '../pip-webui-documents/dist/**/*',
            // '../pip-webui-composite/dist/**/*',
            // '../pip-webui-errors/dist/**/*',
            // '../pip-webui-entry/dist/**/*',
            // '../pip-webui-settings/dist/**/*',
            // '../pip-webui-guidance/dist/**/*',
            // '../pip-webui-support/dist/**/*',
            // '../pip-webui-help/dist/**/*'
        ]
    },
    samples: {
        port: 8080
    },
    api: {
        port: 8081
    }
};
