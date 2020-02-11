## arc-android-oauth example

run `./gradlew :app:installDebug` to install apk in your device.

## Usage

### Step 1: Create Application

Login [DID Connect Service](https://connect.wallet.arcblockio.cn/) and create an application.

Click `Connections` tab, scroll to OAuth2 section. you can found `clientID` .


### Step 2: Create your android application

add dependence in your project gradle:

```groovy
implementation 'io.arcblock.forge:android-oauth:${latest version}'
```

### Step3: Init OAuthClient

```kotlin
val client = OAuthClient("$clientID", "https://connect.wallet.arcblockio.cn/", "${your application package name}",this)

client.login()
```

### Step4: create a callback activity

Create a callback activity named `ForgeCallBackActivity` in package `${your applicaction package}.callback`

and in CallbackActivity's onCreate method, get OAuthToken by `ForgeCallBackUtil.getOAuthToken(intent)`. then pass the token to your application's backend to query oauth info.
