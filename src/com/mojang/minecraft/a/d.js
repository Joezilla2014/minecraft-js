
package com.mojang.minecraft.a;

import com.mojang.minecraft.phys.AABB;
import org.lwjgl.opengl.GL11;
import org.lwjgl.BufferUtils;
import java.nio.FloatBuffer;

public final class d
{
    private float[][] a;
    private static d b;
    private FloatBuffer c;
    private FloatBuffer d;
    private FloatBuffer e;
    private float[] f;
    private float[] g;
    private float[] h;
    
    private d() {
        this.a = new float[6][4];
        this.c = BufferUtils.createFloatBuffer(16);
        this.d = BufferUtils.createFloatBuffer(16);
        this.e = BufferUtils.createFloatBuffer(16);
        this.f = new float[16];
        this.g = new float[16];
        this.h = new float[16];
    }
    
    public static d a() {
        final d b;
        (b = d.b).c.clear();
        b.d.clear();
        b.e.clear();
        GL11.glGetFloat(2983, b.c);
        GL11.glGetFloat(2982, b.d);
        b.c.flip().limit(16);
        b.c.get(b.f);
        b.d.flip().limit(16);
        b.d.get(b.g);
        b.h[0] = b.g[0] * b.f[0] + b.g[1] * b.f[4] + b.g[2] * b.f[8] + b.g[3] * b.f[12];
        b.h[1] = b.g[0] * b.f[1] + b.g[1] * b.f[5] + b.g[2] * b.f[9] + b.g[3] * b.f[13];
        b.h[2] = b.g[0] * b.f[2] + b.g[1] * b.f[6] + b.g[2] * b.f[10] + b.g[3] * b.f[14];
        b.h[3] = b.g[0] * b.f[3] + b.g[1] * b.f[7] + b.g[2] * b.f[11] + b.g[3] * b.f[15];
        b.h[4] = b.g[4] * b.f[0] + b.g[5] * b.f[4] + b.g[6] * b.f[8] + b.g[7] * b.f[12];
        b.h[5] = b.g[4] * b.f[1] + b.g[5] * b.f[5] + b.g[6] * b.f[9] + b.g[7] * b.f[13];
        b.h[6] = b.g[4] * b.f[2] + b.g[5] * b.f[6] + b.g[6] * b.f[10] + b.g[7] * b.f[14];
        b.h[7] = b.g[4] * b.f[3] + b.g[5] * b.f[7] + b.g[6] * b.f[11] + b.g[7] * b.f[15];
        b.h[8] = b.g[8] * b.f[0] + b.g[9] * b.f[4] + b.g[10] * b.f[8] + b.g[11] * b.f[12];
        b.h[9] = b.g[8] * b.f[1] + b.g[9] * b.f[5] + b.g[10] * b.f[9] + b.g[11] * b.f[13];
        b.h[10] = b.g[8] * b.f[2] + b.g[9] * b.f[6] + b.g[10] * b.f[10] + b.g[11] * b.f[14];
        b.h[11] = b.g[8] * b.f[3] + b.g[9] * b.f[7] + b.g[10] * b.f[11] + b.g[11] * b.f[15];
        b.h[12] = b.g[12] * b.f[0] + b.g[13] * b.f[4] + b.g[14] * b.f[8] + b.g[15] * b.f[12];
        b.h[13] = b.g[12] * b.f[1] + b.g[13] * b.f[5] + b.g[14] * b.f[9] + b.g[15] * b.f[13];
        b.h[14] = b.g[12] * b.f[2] + b.g[13] * b.f[6] + b.g[14] * b.f[10] + b.g[15] * b.f[14];
        b.h[15] = b.g[12] * b.f[3] + b.g[13] * b.f[7] + b.g[14] * b.f[11] + b.g[15] * b.f[15];
        b.a[0][0] = b.h[3] - b.h[0];
        b.a[0][1] = b.h[7] - b.h[4];
        b.a[0][2] = b.h[11] - b.h[8];
        b.a[0][3] = b.h[15] - b.h[12];
        a(b.a, 0);
        b.a[1][0] = b.h[3] + b.h[0];
        b.a[1][1] = b.h[7] + b.h[4];
        b.a[1][2] = b.h[11] + b.h[8];
        b.a[1][3] = b.h[15] + b.h[12];
        a(b.a, 1);
        b.a[2][0] = b.h[3] + b.h[1];
        b.a[2][1] = b.h[7] + b.h[5];
        b.a[2][2] = b.h[11] + b.h[9];
        b.a[2][3] = b.h[15] + b.h[13];
        a(b.a, 2);
        b.a[3][0] = b.h[3] - b.h[1];
        b.a[3][1] = b.h[7] - b.h[5];
        b.a[3][2] = b.h[11] - b.h[9];
        b.a[3][3] = b.h[15] - b.h[13];
        a(b.a, 3);
        b.a[4][0] = b.h[3] - b.h[2];
        b.a[4][1] = b.h[7] - b.h[6];
        b.a[4][2] = b.h[11] - b.h[10];
        b.a[4][3] = b.h[15] - b.h[14];
        a(b.a, 4);
        b.a[5][0] = b.h[3] + b.h[2];
        b.a[5][1] = b.h[7] + b.h[6];
        b.a[5][2] = b.h[11] + b.h[10];
        b.a[5][3] = b.h[15] + b.h[14];
        a(b.a, 5);
        return d.b;
    }
    
    private static void a(final float[][] array, final int n) {
        final float n2 = (float)Math.sqrt(array[n][0] * array[n][0] + array[n][1] * array[n][1] + array[n][2] * array[n][2]);
        final float[] array2 = array[n];
        final int n3 = 0;
        array2[n3] /= n2;
        final float[] array3 = array[n];
        final int n4 = 1;
        array3[n4] /= n2;
        final float[] array4 = array[n];
        final int n5 = 2;
        array4[n5] /= n2;
        final float[] array5 = array[n];
        final int n6 = 3;
        array5[n6] /= n2;
    }
    
    public final boolean a(final float n, final float n2, final float n3, final float n4, final float n5, final float n6) {
        for (int i = 0; i < 6; ++i) {
            if (this.a[i][0] * n + this.a[i][1] * n2 + this.a[i][2] * n3 + this.a[i][3] <= 0.0f && this.a[i][0] * n4 + this.a[i][1] * n2 + this.a[i][2] * n3 + this.a[i][3] <= 0.0f && this.a[i][0] * n + this.a[i][1] * n5 + this.a[i][2] * n3 + this.a[i][3] <= 0.0f && this.a[i][0] * n4 + this.a[i][1] * n5 + this.a[i][2] * n3 + this.a[i][3] <= 0.0f && this.a[i][0] * n + this.a[i][1] * n2 + this.a[i][2] * n6 + this.a[i][3] <= 0.0f && this.a[i][0] * n4 + this.a[i][1] * n2 + this.a[i][2] * n6 + this.a[i][3] <= 0.0f && this.a[i][0] * n + this.a[i][1] * n5 + this.a[i][2] * n6 + this.a[i][3] <= 0.0f && this.a[i][0] * n4 + this.a[i][1] * n5 + this.a[i][2] * n6 + this.a[i][3] <= 0.0f) {
                return false;
            }
        }
        return true;
    }
    
    public final boolean a(final AABB aabb) {
        return this.a(aabb.x0, aabb.y0, aabb.z0, aabb.x1, aabb.y1, aabb.z1);
    }
    
    static {
        d.b = new d();
    }
}
