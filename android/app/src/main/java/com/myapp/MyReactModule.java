package com.myapp;

import android.widget.Toast;
import android.content.Context;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Date;
import java.text.SimpleDateFormat;

public class MyReactModule extends ReactContextBaseJavaModule {
    private Context mContext;

    @Override
    public String getName() {
        return "cookiecat";//这个名字是必须要写的，rn里面用这个名字调用方法
    }

    public MyReactModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @ReactMethod//这里的注释一定要写的，说明这个方法是rn用的
    public void rnCallAndroid(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void getTime() {
        SimpleDateFormat formatDate = new SimpleDateFormat("yyyy年MM月dd日  HH:mm:ss");
        Date date = new Date(System.currentTimeMillis());   //获取当前时间
        String s = formatDate.format(date);
        Toast.makeText(mContext, s, Toast.LENGTH_SHORT).show();

    }


}
