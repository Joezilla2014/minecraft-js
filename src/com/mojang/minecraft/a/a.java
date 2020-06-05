// 
// Decompiled by Procyon v0.5.36
// 

package com.mojang.minecraft.a;

import com.mojang.minecraft.a.a.c;
import org.lwjgl.opengl.GL11;
import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.util.ArrayList;
import org.lwjgl.BufferUtils;
import java.util.List;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.HashMap;

public class a
{
    private HashMap d;
    public IntBuffer a;
    public ByteBuffer b;
    public List c;
    
    public a() {
        this.d = new HashMap();
        this.a = BufferUtils.createIntBuffer(1);
        this.b = BufferUtils.createByteBuffer(262144);
        this.c = new ArrayList();
    }
    
    public final int a(final String s) {
        try {
            if (this.d.containsKey(s)) {
                return this.d.get(s);
            }
            final int a = this.a(ImageIO.read(a.class.getResourceAsStream(s)));
            this.d.put(s, a);
            return a;
        }
        catch (IOException ex) {
            throw new RuntimeException("!!");
        }
    }
    
    public final int a(final BufferedImage bufferedImage) {
        this.a.clear();
        GL11.glGenTextures(this.a);
        final int value = this.a.get(0);
        GL11.glBindTexture(3553, value);
        GL11.glTexParameteri(3553, 10241, 9728);
        GL11.glTexParameteri(3553, 10240, 9728);
        final int width = bufferedImage.getWidth();
        final int height = bufferedImage.getHeight();
        final int[] rgbArray = new int[width * height];
        final byte[] src = new byte[width * height << 2];
        bufferedImage.getRGB(0, 0, width, height, rgbArray, 0, width);
        for (int i = 0; i < rgbArray.length; ++i) {
            final int n = rgbArray[i] >>> 24;
            final int n2 = rgbArray[i] >> 16 & 0xFF;
            final int n3 = rgbArray[i] >> 8 & 0xFF;
            final int n4 = rgbArray[i] & 0xFF;
            src[i << 2] = (byte)n2;
            src[(i << 2) + 1] = (byte)n3;
            src[(i << 2) + 2] = (byte)n4;
            src[(i << 2) + 3] = (byte)n;
        }
        this.b.clear();
        this.b.put(src);
        this.b.position(0).limit(src.length);
        GL11.glTexImage2D(3553, 0, 6408, width, height, 0, 6408, 5121, this.b);
        return value;
    }
    
    public final void a(final c c) {
        this.c.add(c);
        c.a();
    }
}
