
# Nest JS Folder Structure

### project folder.

```
├───assets
│   └───images
├───i18n
│   └───DEFAULT
├───libs
│   ├───addons
│   │   ├───dynamic-ax
│   │   ├───kerry-express
│   │   ├───lazada
│   │   ├───open-api
│   │   ├───sap-business-one
│   │   ├───sap-hana
│   │   └───shopee
│   ├───cronjob
│   │   └───src
│   │       └───cronjob
│   ├───definition
│   │   └───mkp
│   ├───error
│   │   └───src
│   │       ├───code
│   │       │   ├───1-common
│   │       │   ├───2-data
│   │       │   └───3-business
│   │       └───decorators
│   ├───helpers
│   │   └───src
│   ├───queues
│   ├───secure
│   ├───task_schedule
│   │   └───modules
│   │       ├───dynamic-ax
│   │       ├───lazada
│   │       ├───message
│   │       ├───openapi
│   │       ├───sap-all-one
│   │       ├───sap-business-one
│   │       └───shopee
│   └───token
│       ├───guards
│       ├───middlewares
│       └───secure
├───secure
├───src
│   ├───api
│   │   ├───authentication
│   │   ├───master
│   │   │   └───edi
│   │   │       ├───access-log
│   │   │       ├───app-global-var
│   │   │       ├───data-filter
│   │   │       ├───lists
│   │   │       ├───message-mapping
│   │   │       └───message-prop
│   │   ├───mock
│   │   ├───openapi
│   │   │   └───api
│   │   ├───privateapi
│   │   │   └───api
│   │   ├───profile
│   │   └───task-schedule
│   ├───common
│   │   └───exceptions
│   ├───configuration
│   ├───database
│   ├───definition
│   │   └───enums
│   ├───helpers
│   ├───middleware
│   ├───scripts
│   │   ├───database
│   │   │   ├───migration
│   │   │   └───model-to-type
│   │   ├───header-comment
│   │   ├───move-build
│   │   ├───pkg
│   │   └───test
│   └───services
│       ├───app
│       ├───core
│       ├───messages
│       └───openapi
└───test


+ Folder naming can be singular or plural, but should be standardized
### Root folders:
+ *assets* - This folder contains static files images, icons, fonts, or other media.
+ *i18n* - This folder is typically includes language files and translations to support multiple languages in the application
+ *libs* - This folder houses reusable libraries and modules that can be shared across different parts of the application
+ *secure* - It is a storage for private keys and public keys.
+ *src* - The main source code of the application resides in this folder
+ *test* - This folder is designated for testing purposes. It includes unit tests, integration tests, and any related scripts that ensure the application.

### Assets folder contains the following:
+ *images* - This subfolder within the assets folder specifically stores image files that the application may use, such as logos, icons, and other graphical.

### i18n folder contains the following:
+ *DEFAULT* - This is the main directory for default language resources. It typically includes subfolders or files for different

### libs folder will contain the following:
+ *addons* - This subfolder, there will be services for each module: dynamic-ax, lazada, openapi, sap-all-one, sap-business-one and shopee.
+ *cronjob* - It is a service for the cronjob, which will include functions such as restart, add, update, and remove tasks, among others.
+ *definition* - Definition various configurations.
+ *error* - Storage for error codes and their corresponding meanings.
+ *helpers* - Storage for functions that assist in various tasks.
+ *queues* - It is a service used for the queue, which includes configurations for Redis, a checkConnection function, and an addMessageQueue function.
+ *secure* - It is a service for generating various signature values.
+ *task_schedule* - It is a service for initiating the execution of tasks.
+ *token* - It is a service for verification purposes, such as guard functions and token verification.

### src folder contains the following:
+ *api* - It is responsible for handling requests from the client and returning data to the client, with access methods through various routes.
+ *common* - It is a storage for shared files, such as exceptions.
+ *configuration* - Configuration values for the application.
+ *database* - Database service and database model.
+ *definition* - Definition various configurations.
+ *helpers* - Functions and classes that assist in performing common tasks across the application.
+ *middleware* - Handle requests before they reach the main application logic
+ *scripts* - Collection of scripts used for various runs, such as database migrations.
+ *services* - Functions business logic and service-related 
```

## Running the app

```bash
# production
$ node manipulate.js
$ node odd-number.js
$ node smily.js
```

## Test

```bash
# unit tests
$ node manipulate.spec.js
$ node odd-number.spec.js
$ node smily.spec.js
```
