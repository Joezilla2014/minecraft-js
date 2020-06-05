// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.net;

import javax.imageio.ImageIO;
import java.net.URL;
import java.net.HttpURLConnection;

final class e extends Thread
{
    private /* synthetic */ NetworkPlayer a;
    
    e(final NetworkPlayer a) {
        this.a = a;
    }
    
    @Override
    public final void run() {
        HttpURLConnection httpURLConnection = null;
        try {
            (httpURLConnection = (HttpURLConnection)new URL("http://www.minecraft.net/skin/" + this.a.name + ".png").openConnection()).setDoInput(true);
            httpURLConnection.setDoOutput(false);
            httpURLConnection.connect();
            if (httpURLConnection.getResponseCode() == 404) {
                System.out.println("Failed to load texture for " + this.a.name);
                return;
            }
            System.out.println("Loading texture for " + this.a.name);
            this.a.newTexture = ImageIO.read(httpURLConnection.getInputStream());
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
        finally {
            httpURLConnection.disconnect();
        }
    }
}
