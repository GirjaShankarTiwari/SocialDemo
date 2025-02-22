package com.sanju;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;

public class CameraModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactApplicationContext;

    public CameraModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        reactApplicationContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "CameraModule";
    }

        @ReactMethod
        public void openCamera(final Callback successCallback,final Callback errorCallback) {
            try {
                // Get the current activity
                Activity currentActivity = reactApplicationContext.getCurrentActivity();
                if (currentActivity == null) {
                    errorCallback.invoke("Current activity is null");
                    return;
                }
                // Create camera intent
                Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

                // Listen for the result of the camera activity

                reactApplicationContext.addActivityEventListener(new ActivityEventListener() {
                    @Override
                    public void onActivityResult(Activity activity, int requestCode, int resultCode, @Nullable Intent data) {
                        if (requestCode == 100) {
                            // Check if the result is OK and data is not null
                            if (resultCode == Activity.RESULT_OK && data != null) {

                                if (data.getExtras() != null) {
                                    Bitmap imageBitmap = (Bitmap) data.getExtras().get("data");
                                    Uri imageUri = getImageUri(reactApplicationContext.getCurrentActivity(),imageBitmap);
                                    Log.e("ImagePath:",""+imageUri);
                                    if (imageUri != null) {
                                        successCallback.invoke(imageUri.toString()); // Return the URI to JS
                                    } else {
                                        errorCallback.invoke("No image returned");
                                    }
                                }

                            } else {
                                errorCallback.invoke("Camera operation failed");
                            }
                        }
                    }

                    @Override
                    public void onNewIntent(Intent intent) {

                    }
                });
                // Start the camera intent for result
                currentActivity.startActivityForResult(cameraIntent, 100);
            } catch (Exception e) {
                errorCallback.invoke(e.getMessage());
            }
        }

    public Uri getImageUri(Context inContext, Bitmap inImage) {
        ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        inImage.compress(Bitmap.CompressFormat.JPEG, 100, bytes);
        String path = MediaStore.Images.Media.insertImage(inContext.getContentResolver(), inImage, "Title", null);
        return Uri.parse(path);
    }
    }

