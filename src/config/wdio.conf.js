const path = require('path'); 

exports.config = {
    runner: 'local',

    specs: [
        '../**/*.feature'
    ],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--disable-gpu', '--start-maximized', '--window-size=1920,1080']
            }
        },
        // {
        //     browserName: 'firefox',
        //     'moz:firefoxOptions': {
        //         args: ['-headless', '--start-maximized']
        //     }
        // },
        // {
        //     browserName: 'MicrosoftEdge',
        //     'ms:edgeOptions': {
        //         args: ['--headless', '--disable-gpu', '--start-maximized']
        //     }
        // }
    ],

    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://trello.com',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./**/*.tests.js'],
        retry: 0,
        timeout: 60000,
    },

    reporters: [
        'spec',
        ['html', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            template: path.join(__dirname, 'node_modules', '@rpii', 'wdio-html-reporter', 'templates', 'wdio-html-reporter-template.hbs'),
            reportTitle: 'Trello Test Report',
            showInBrowser: false,
            collapseTests: false,
            useOnAfterCommandForScreenshot: true,
            LOG: 'info',
            produceJson: false,
            linkScreenshots: true,
            // Configuraciones adicionales recomendadas
            showAllHooks: true,
            stdout: true,
            addConsoleLogs: true
        }]
    ],
    
    beforeSuite: async function () {
        const fs = require('fs');
        const path = require('path');
        
        const reportDir = path.join(process.cwd(), 'reports', 'html-reports');
        const screenshotsDir = path.join(process.cwd(), 'reports', 'screenshots');
        
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
            console.log('📂 Carpeta de reportes creada:', reportDir);
        }
        
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true });
            console.log('📂 Carpeta de screenshots creada:', screenshotsDir);
        }
    },

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            const screenshotName = `ERROR_${Date.now()}.png`;
            await browser.saveScreenshot(`./reports/screenshots/${screenshotName}`);
        }
    }
};