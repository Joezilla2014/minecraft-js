
package com.mojang.minecraft.b;

import com.mojang.minecraft.a.c;
import org.lwjgl.opengl.GL11;
import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;
import com.mojang.minecraft.a.a;

public final class l
{
    private int[] a;
    private int b;
    
    public l(final String name, final a a) {
        this.a = new int[256];
        this.b = 0;
        BufferedImage read;
        try {
            read = ImageIO.read(a.class.getResourceAsStream(name));
        }
        catch (IOException cause) {
            throw new RuntimeException(cause);
        }
        final int width = read.getWidth();
        final int height = read.getHeight();
        final int[] rgbArray = new int[width * height];
        read.getRGB(0, 0, width, height, rgbArray, 0, width);
        for (int i = 0; i < 128; ++i) {
            final int n = i % 16;
            final int n2 = i / 16;
            int n3 = 0;
            for (int n4 = 0; n3 < 8 && n4 == 0; ++n3) {
                final int n5 = (n << 3) + n3;
                for (int n4 = 1, n6 = 0; n6 < 8 && n4 != 0; ++n6) {
                    if ((rgbArray[n5 + ((n2 << 3) + n6) * width] & 0xFF) > 128) {
                        n4 = 0;
                    }
                }
            }
            if (i == 32) {
                n3 = 4;
            }
            this.a[i] = n3;
        }
        this.b = a.a(name);
    }
    
    public final void a(final String s, final int n, final int n2, final int n3) {
        this.a(s, n + 1, n2 + 1, n3, true);
        this.b(s, n, n2, n3);
    }
    
    public final void b(final String s, final int n, final int n2, final int n3) {
        this.a(s, n, n2, n3, false);
    }
    
    private void a(final String s, final int n, final int n2, int index, final boolean b) {
        if (s == null) {
            return;
        }
        final char[] charArray = s.toCharArray();
        if (b) {
            index = (index & 0xFCFCFC) >> 2;
        }
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, this.b);
        final c a;
        (a = c.a).b();
        a.a(index);
        int n3 = 0;
        for (int i = 0; i < charArray.length; ++i) {
            if (charArray[i] == '&' && charArray.length > i + 1) {
                if ((index = "0123456789abcdef".indexOf(charArray[i + 1])) < 0) {
                    index = 15;
                }
                final int n4 = (index & 0x8) << 3;
                index = ((index = ((index & 0x4) >> 2) * 191 + n4) << 16 | ((index & 0x2) >> 1) * 191 + n4 << 8 | (index & 0x1) * 191 + n4);
                i += 2;
                if (b) {
                    index = (index & 0xFCFCFC) >> 2;
                }
                a.a(index);
            }
            index = charArray[i] % '\u0010' << 3;
            final int n5 = charArray[i] / '\u0010' << 3;
            final float n6 = 7.99f;
            a.a((float)(n + n3), n2 + n6, 0.0f, index / 128.0f, (n5 + n6) / 128.0f);
            a.a(n + n3 + n6, n2 + n6, 0.0f, (index + n6) / 128.0f, (n5 + n6) / 128.0f);
            a.a(n + n3 + n6, (float)n2, 0.0f, (index + n6) / 128.0f, n5 / 128.0f);
            a.a((float)(n + n3), (float)n2, 0.0f, index / 128.0f, n5 / 128.0f);
            n3 += this.a[charArray[i]];
        }
        a.a();
        GL11.glDisable(3553);
    }
    
    public final int a(final String s) {
        if (s == null) {
            return 0;
        }
        final char[] charArray = s.toCharArray();
        int n = 0;
        for (int i = 0; i < charArray.length; ++i) {
            if (charArray[i] == '&') {
                ++i;
            }
            else {
                n += this.a[charArray[i]];
            }
        }
        return n;
    }
}
