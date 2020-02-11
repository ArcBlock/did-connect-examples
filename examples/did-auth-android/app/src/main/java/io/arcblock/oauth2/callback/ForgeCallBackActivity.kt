package io.arcblock.oauth2.callback

import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.JsonParser
import io.arcblock.forge.wallet.oauth.ForgeCallBackUtil
import io.arcblock.oauth2.R
import okhttp3.*
import java.io.IOException

import java.lang.Exception

/**
 * Author       : shan@arcblock.io`
 * Time         : 2019-12-26
 * Edited By    :
 * Edited Time  :
 * Description  :
 **/
class ForgeCallBackActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_info)
        handleCallback()
    }

    fun handleCallback() {
        try {
            val loginToken = ForgeCallBackUtil.getOAuthToken(intent)
            val okHttpClient = OkHttpClient.Builder().build()
//              .addInterceptor(HttpLoggingInterceptor(object :HttpLoggingInterceptor.Logger{
//                override fun log(message: String) {
//                    Log.e("http",message)
//                }
//            } ).apply { this.level = HttpLoggingInterceptor.Level.BODY }).build()
            okHttpClient.newCall(
                Request.Builder()
                    .url("http://oauth2-demo.arcblockio.cn/api/user?code=$loginToken")
                    .build()
            ).enqueue(object :Callback{
                override fun onFailure(call: Call, e: IOException) {

                }

                override fun onResponse(call: Call, response: Response) {
                    showMesg(response.body?.string() ?:"error")
                }
            })

        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
    private fun showMesg(msg :String) {
        runOnUiThread {
            findViewById<TextView>(R.id.txt).text = msg
        }
    }
}
