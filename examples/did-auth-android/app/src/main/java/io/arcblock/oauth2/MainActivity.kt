package io.arcblock.oauth2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import io.arcblock.forge.wallet.oauth.OAuthClient


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)
        val client = OAuthClient("99dc954c462740ee810b37256191c348", "https://connect.wallet.arcblockio.cn/", "io.arcblock.oauth2",this)
        findViewById<View>(R.id.login_btn).setOnClickListener {
            Thread(Runnable {
                client.login()
            }).start()
            Toast.makeText(this," click",Toast.LENGTH_SHORT).show()
        }
    }
}
