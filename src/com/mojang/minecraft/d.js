
package com.mojang.minecraft;

import java.util.Iterator;
import java.util.Collection;
import java.util.Comparator;
import java.util.TreeSet;
import com.mojang.minecraft.particle.Particle;
import com.mojang.minecraft.character.Zombie;
import com.mojang.minecraft.phys.AABB;
import java.awt.Point;
import java.awt.MouseInfo;
import java.awt.Component;
import javax.swing.JOptionPane;
import java.nio.IntBuffer;
import java.io.InputStream;
import java.io.FileInputStream;
import org.lwjgl.input.Controllers;
import org.lwjgl.opengl.DisplayMode;
import org.lwjgl.opengl.Display;
import org.lwjgl.input.Keyboard;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.File;
import org.lwjgl.util.glu.GLU;
import org.lwjgl.opengl.GL11;
import org.lwjgl.LWJGLException;
import org.lwjgl.input.Mouse;
import com.mojang.minecraft.b.j;
import java.awt.AWTException;
import com.mojang.minecraft.a.a.b;
import org.lwjgl.BufferUtils;
import java.awt.Robot;
import com.mojang.minecraft.b.f;
import com.mojang.minecraft.b.l;
import org.lwjgl.input.Cursor;
import java.awt.Canvas;
import com.mojang.minecraft.particle.a;
import com.mojang.minecraft.player.Player;
import com.mojang.minecraft.a.g;
import com.mojang.minecraft.level.Level;
import java.nio.FloatBuffer;

public final class d implements Runnable
{
    private boolean v;
    public int a;
    public int b;
    private FloatBuffer w;
    private FloatBuffer x;
    private c y;
    public Level c;
    private g z;
    public Player d;
    private a A;
    public com.mojang.minecraft.a e;
    public String f;
    private Canvas B;
    public boolean g;
    public volatile boolean h;
    private Cursor C;
    private int D;
    public com.mojang.minecraft.a.a i;
    public l j;
    private int E;
    public f k;
    public com.mojang.minecraft.level.a l;
    private com.mojang.minecraft.level.b.a F;
    private int G;
    public String m;
    public int n;
    private Robot H;
    private com.mojang.minecraft.b.a I;
    public com.mojang.minecraft.net.d o;
    String p;
    int q;
    private float J;
    private float K;
    private float L;
    volatile boolean r;
    public String s;
    private boolean M;
    private int N;
    private float O;
    private e P;
    private float Q;
    private boolean R;
    private volatile int S;
    private volatile int T;
    private FloatBuffer U;
    private String V;
    private String W;
    public boolean t;
    public com.mojang.minecraft.character.a u;
    
    public d(final Canvas b, final int a, final int b2, final boolean b3) {
        this.v = false;
        this.w = BufferUtils.createFloatBuffer(4);
        this.x = BufferUtils.createFloatBuffer(4);
        this.y = new c(20.0f);
        this.e = null;
        this.g = false;
        this.h = false;
        this.D = 1;
        this.E = 0;
        this.k = null;
        this.l = new com.mojang.minecraft.level.a(this);
        this.F = new com.mojang.minecraft.level.b.a(this);
        this.G = 0;
        this.m = null;
        this.n = 0;
        this.p = null;
        this.q = 0;
        this.J = 0.5f;
        this.K = 0.8f;
        this.L = 1.0f;
        this.r = false;
        this.s = "";
        this.M = false;
        this.N = 0;
        this.O = 0.0f;
        this.P = null;
        this.Q = 1.0f;
        this.R = false;
        this.S = 0;
        this.T = 0;
        this.U = BufferUtils.createFloatBuffer(16);
        this.V = "";
        this.W = "";
        this.t = false;
        this.u = new com.mojang.minecraft.character.a();
        this.B = b;
        this.a = a;
        this.b = b2;
        this.v = false;
        (this.i = new com.mojang.minecraft.a.a()).a(new com.mojang.minecraft.a.a.a());
        this.i.a(new b());
        if (b != null) {
            try {
                this.H = new Robot();
            }
            catch (AWTException ex) {
                ex.printStackTrace();
            }
        }
    }
    
    public final void a(final f k) {
        if (this.k instanceof j) {
            return;
        }
        if (this.k != null) {
            this.k.b();
        }
        if ((this.k = k) != null) {
            if (this.M) {
                this.d.releaseAllKeys();
                this.M = false;
                if (this.g) {
                    try {
                        Mouse.setNativeCursor((Cursor)null);
                    }
                    catch (LWJGLException ex) {
                        ex.printStackTrace();
                    }
                }
                else {
                    Mouse.setGrabbed(false);
                }
            }
            k.a(this, this.a * 240 / this.b, this.b * 240 / this.b);
            return;
        }
        this.b();
    }
    
    private static void d(final String str) {
        final int glGetError;
        if ((glGetError = GL11.glGetError()) != 0) {
            final String gluErrorString = GLU.gluErrorString(glGetError);
            System.out.println("########## GL ERROR ##########");
            System.out.println("@ " + str);
            System.out.println(glGetError + ": " + gluErrorString);
            System.exit(0);
        }
    }
    
    public final void a() {
        if (!(this = this).g) {
            try {
                com.mojang.minecraft.level.a.a(this.c, new FileOutputStream(new File("level.dat")));
            }
            catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        Mouse.destroy();
        Keyboard.destroy();
        Display.destroy();
    }
    
    public final void run() {
        this.r = true;
        try {
            this.w.put(new float[] { this.J, this.K, this.L, 1.0f });
            this.w.flip();
            this.x.put(new float[] { 14 / 255.0f, 11 / 255.0f, 10 / 255.0f, 1.0f });
            this.x.flip();
            if (this.B != null) {
                Display.setParent(this.B);
            }
            else if (this.v) {
                Display.setFullscreen(true);
                this.a = Display.getDisplayMode().getWidth();
                this.b = Display.getDisplayMode().getHeight();
            }
            else {
                Display.setDisplayMode(new DisplayMode(this.a, this.b));
            }
            Display.setTitle("Minecraft 0.0.21a");
            try {
                Display.create();
            }
            catch (LWJGLException ex) {
                ex.printStackTrace();
                try {
                    Thread.sleep(1000L);
                }
                catch (InterruptedException ex8) {}
                Display.create();
            }
            Keyboard.create();
            Mouse.create();
            try {
                Controllers.create();
            }
            catch (Exception ex2) {
                ex2.printStackTrace();
            }
            d("Pre startup");
            GL11.glEnable(3553);
            GL11.glShadeModel(7425);
            GL11.glClearDepth(1.0);
            GL11.glEnable(2929);
            GL11.glDepthFunc(515);
            GL11.glEnable(3008);
            GL11.glAlphaFunc(516, 0.0f);
            GL11.glCullFace(1029);
            GL11.glMatrixMode(5889);
            GL11.glLoadIdentity();
            GL11.glMatrixMode(5888);
            d("Startup");
            this.j = new l("/default.png", this.i);
            final IntBuffer intBuffer;
            (intBuffer = BufferUtils.createIntBuffer(256)).clear().limit(256);
            GL11.glViewport(0, 0, this.a, this.b);
            if (this.p != null && this.e != null) {
                this.o = new com.mojang.minecraft.net.d(this, this.p, this.q, this.e.b, this.e.d);
                this.c = null;
            }
            else {
                boolean a = false;
                try {
                    if (this.m != null) {
                        a = this.a(this.m, this.n);
                    }
                    else if (!this.g) {
                        Level level;
                        if (!(a = ((level = this.l.a(new FileInputStream(new File("level.dat")))) != null))) {
                            a = ((level = this.l.b(new FileInputStream(new File("level.dat")))) != null);
                        }
                        this.a(level);
                    }
                }
                catch (Exception ex3) {
                    ex3.printStackTrace();
                    a = false;
                }
                if (!a) {
                    this.b(1);
                }
            }
            this.z = new g(this.i);
            this.A = new a(this.c, this.i);
            (this.d = new Player(this.c, new com.mojang.minecraft.player.b())).resetPos();
            if (this.c != null) {
                this.a(this.c);
            }
            if (this.g) {
                try {
                    this.C = new Cursor(16, 16, 0, 0, 1, intBuffer, (IntBuffer)null);
                }
                catch (LWJGLException ex4) {
                    ex4.printStackTrace();
                }
            }
            d("Post startup");
            this.I = new com.mojang.minecraft.b.a(this, this.a, this.b);
        }
        catch (Exception ex6) {
            final Exception ex5 = ex6;
            ex6.printStackTrace();
            JOptionPane.showMessageDialog(null, ex5.toString(), "Failed to start Minecraft", 0);
            return;
        }
        long currentTimeMillis = System.currentTimeMillis();
        int i = 0;
        try {
            while (this.r) {
                if (this.h) {
                    Thread.sleep(100L);
                }
                else {
                    if (this.B == null && Display.isCloseRequested()) {
                        this.r = false;
                    }
                    try {
                        final c y = this.y;
                        final long currentTimeMillis2;
                        final long n = (currentTimeMillis2 = System.currentTimeMillis()) - y.g;
                        final long n2 = System.nanoTime() / 1000000L;
                        if (n > 1000L) {
                            final double n3 = n / (double)(n2 - y.h);
                            final c c = y;
                            c.i += (n3 - y.i) * 0.20000000298023224;
                            y.g = currentTimeMillis2;
                            y.h = n2;
                        }
                        if (n < 0L) {
                            y.g = currentTimeMillis2;
                            y.h = n2;
                        }
                        final double b;
                        double n4 = ((b = n2 / 1000.0) - y.b) * y.i;
                        y.b = b;
                        if (n4 < 0.0) {
                            n4 = 0.0;
                        }
                        if (n4 > 1.0) {
                            n4 = 1.0;
                        }
                        final c c2 = y;
                        c2.f += (float)(n4 * y.e * y.a);
                        y.c = (int)y.f;
                        if (y.c > 100) {
                            y.c = 100;
                        }
                        final c c3 = y;
                        c3.f -= y.c;
                        y.d = y.f;
                        for (int j = 0; j < this.y.c; ++j) {
                            ++this.G;
                            this.f();
                        }
                        d("Pre render");
                        final float d = this.y.d;
                        if (this.R && !Display.isActive()) {
                            this.d();
                        }
                        this.R = Display.isActive();
                        if (this.M) {
                            int dx = 0;
                            int dy = 0;
                            if (this.g) {
                                if (this.B != null) {
                                    final Point locationOnScreen;
                                    final int x = (locationOnScreen = this.B.getLocationOnScreen()).x + this.a / 2;
                                    final int y2 = locationOnScreen.y + this.b / 2;
                                    final Point location;
                                    dx = (location = MouseInfo.getPointerInfo().getLocation()).x - x;
                                    dy = -(location.y - y2);
                                    this.H.mouseMove(x, y2);
                                }
                                else {
                                    Mouse.setCursorPosition(this.a / 2, this.b / 2);
                                }
                            }
                            else {
                                dx = Mouse.getDX();
                                dy = Mouse.getDY();
                            }
                            this.d.turn((float)dx, (float)(dy * this.D));
                        }
                        if (!this.t) {
                            if (this.c != null) {
                                this.a(d);
                                this.I.a();
                                d("Rendered gui");
                            }
                            else {
                                GL11.glViewport(0, 0, this.a, this.b);
                                GL11.glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
                                GL11.glClear(16640);
                                GL11.glMatrixMode(5889);
                                GL11.glLoadIdentity();
                                GL11.glMatrixMode(5888);
                                GL11.glLoadIdentity();
                                this.c();
                            }
                            if (this.k != null) {
                                final int n5 = this.a * 240 / this.b;
                                final int n6 = this.b * 240 / this.b;
                                this.k.a(Mouse.getX() * n5 / this.a, n6 - Mouse.getY() * n6 / this.b - 1);
                            }
                            Display.update();
                        }
                        d("Post render");
                        ++i;
                    }
                    catch (Exception obj) {
                        this.a(new j("Client error", "The game broke! [" + obj + "]"));
                        obj.printStackTrace();
                    }
                    while (System.currentTimeMillis() >= currentTimeMillis + 1000L) {
                        this.s = i + " fps, " + com.mojang.minecraft.a.f.a + " chunk updates";
                        com.mojang.minecraft.a.f.a = 0;
                        currentTimeMillis += 1000L;
                        i = 0;
                    }
                }
            }
        }
        catch (StopGameException ex9) {}
        catch (Exception ex7) {
            ex7.printStackTrace();
        }
        finally {
            this.a();
        }
    }
    
    public final void b() {
        if (this.M) {
            return;
        }
        this.M = true;
        if (this.g) {
            try {
                Mouse.setNativeCursor(this.C);
                Mouse.setCursorPosition(this.a / 2, this.b / 2);
            }
            catch (LWJGLException ex) {
                ex.printStackTrace();
            }
        }
        else {
            Mouse.setGrabbed(true);
        }
        this.a((f)null);
        this.N = this.G + 10000;
    }
    
    private void d() {
        if (this.k instanceof com.mojang.minecraft.b.e) {
            return;
        }
        this.a(new com.mojang.minecraft.b.e());
    }
    
    private void e() {
        if (this.P == null) {
            return;
        }
        int a = this.P.a;
        int b = this.P.b;
        int c = this.P.c;
        if (this.E != 0) {
            if (this.P.d == 0) {
                --b;
            }
            if (this.P.d == 1) {
                ++b;
            }
            if (this.P.d == 2) {
                --c;
            }
            if (this.P.d == 3) {
                ++c;
            }
            if (this.P.d == 4) {
                --a;
            }
            if (this.P.d == 5) {
                ++a;
            }
        }
        final com.mojang.minecraft.level.a.a a2 = com.mojang.minecraft.level.a.a.a[this.c.getTile(a, b, c)];
        if (this.E == 0) {
            if (a2 != com.mojang.minecraft.level.a.a.i || this.d.userType >= 100) {
                final boolean netSetTile = this.c.netSetTile(a, b, c, 0);
                if (a2 != null && netSetTile) {
                    if (this.g()) {
                        this.o.a(a, b, c, this.E, this.d.inventory.a());
                    }
                    a2.a(this.c, a, b, c, this.A);
                }
            }
        }
        else {
            final int a3 = this.d.inventory.a();
            final com.mojang.minecraft.level.a.a a4;
            if ((a4 = com.mojang.minecraft.level.a.a.a[this.c.getTile(a, b, c)]) == null || a4 == com.mojang.minecraft.level.a.a.j || a4 == com.mojang.minecraft.level.a.a.k || a4 == com.mojang.minecraft.level.a.a.l || a4 == com.mojang.minecraft.level.a.a.m) {
                final AABB a5;
                if ((a5 = com.mojang.minecraft.level.a.a.a[a3].a(a, b, c)) != null) {
                    final AABB aabb = a5;
                    if (this.d.bb.intersects(aabb) || !this.c.isFree(aabb)) {
                        return;
                    }
                }
                if (this.g()) {
                    this.o.a(a, b, c, this.E, a3);
                }
                this.c.netSetTile(a, b, c, this.d.inventory.a());
                com.mojang.minecraft.level.a.a.a[a3].b(this.c, a, b, c);
            }
        }
    }
    
    private void f() {
        final com.mojang.minecraft.b.a i = this.I;
        for (int j = 0; j < i.a.size(); ++j) {
            final com.mojang.minecraft.b b = i.a.get(j);
            ++b.b;
        }
        GL11.glBindTexture(3553, this.i.a("/terrain.png"));
        final com.mojang.minecraft.a.a k = this.i;
        for (int l = 0; l < k.c.size(); ++l) {
            final com.mojang.minecraft.a.a.c c;
            (c = k.c.get(l)).a();
            k.b.clear();
            k.b.put(c.a);
            k.b.position(0).limit(c.a.length);
            GL11.glTexSubImage2D(3553, 0, c.b % 16 << 4, c.b / 16 << 4, 16, 16, 6408, 5121, k.b);
        }
        if (this.o != null) {
            if (!this.o.a()) {
                this.a("Connecting..");
                this.a(0);
            }
            else {
                final com.mojang.minecraft.net.d o;
                if ((o = this.o).d && o.b.a) {
                    try {
                        o.b.b();
                    }
                    catch (Exception ex) {
                        o.c.a(new j("Disconnected!", "You've lost connection to the server"));
                        o.c.t = false;
                        ex.printStackTrace();
                        o.b.a();
                        o.c.o = null;
                    }
                }
                final com.mojang.minecraft.net.d o2 = this.o;
                final Player d = this.d;
                final com.mojang.minecraft.net.d d2 = o2;
                if (o2.e) {
                    d2.b.a(com.mojang.minecraft.net.a.i, -1, (int)(d.x * 32.0f), (int)(d.y * 32.0f), (int)(d.z * 32.0f), (int)(d.yRot * 256.0f / 360.0f) & 0xFF, (int)(d.xRot * 256.0f / 360.0f) & 0xFF);
                }
            }
        }
        if (this.k == null || this.k.e) {
            while (Mouse.next()) {
                final int eventDWheel;
                if ((eventDWheel = Mouse.getEventDWheel()) != 0) {
                    final com.mojang.minecraft.player.c inventory = this.d.inventory;
                    int n = eventDWheel;
                    final com.mojang.minecraft.player.c c2 = inventory;
                    if (n > 0) {
                        n = 1;
                    }
                    if (n < 0) {
                        n = -1;
                    }
                    final com.mojang.minecraft.player.c c3 = c2;
                    c3.b -= n;
                    while (c2.b < 0) {
                        final com.mojang.minecraft.player.c c4 = c2;
                        c4.b += c2.a.length;
                    }
                    while (c2.b >= c2.a.length) {
                        final com.mojang.minecraft.player.c c5 = c2;
                        c5.b -= c2.a.length;
                    }
                }
                if (this.k == null) {
                    if (!this.M && Mouse.getEventButtonState()) {
                        this.b();
                    }
                    else {
                        if (Mouse.getEventButton() == 0 && Mouse.getEventButtonState()) {
                            this.e();
                            this.N = this.G;
                        }
                        if (Mouse.getEventButton() == 1 && Mouse.getEventButtonState()) {
                            this.E = (this.E + 1) % 2;
                        }
                        if (Mouse.getEventButton() == 2 && Mouse.getEventButtonState() && this.P != null) {
                            int n2;
                            if ((n2 = this.c.getTile(this.P.a, this.P.b, this.P.c)) == com.mojang.minecraft.level.a.a.d.S) {
                                n2 = com.mojang.minecraft.level.a.a.e.S;
                            }
                            final com.mojang.minecraft.player.c inventory2 = this.d.inventory;
                            final int n3 = n2;
                            final com.mojang.minecraft.player.c c6 = inventory2;
                            final int a;
                            if ((a = inventory2.a(n3)) >= 0) {
                                c6.b = a;
                            }
                            else if (n3 > 0 && com.mojang.minecraft.a.a.contains(com.mojang.minecraft.level.a.a.a[n3])) {
                                c6.a(com.mojang.minecraft.level.a.a.a[n3]);
                            }
                        }
                    }
                }
                if (this.k != null) {
                    this.k.d();
                }
            }
            while (Keyboard.next()) {
                this.d.setKey(Keyboard.getEventKey(), Keyboard.getEventKeyState());
                if (Keyboard.getEventKeyState()) {
                    if (this.k != null) {
                        this.k.e();
                    }
                    if (this.k == null) {
                        if (Keyboard.getEventKey() == 1) {
                            this.d();
                        }
                        if (Keyboard.getEventKey() == 19) {
                            this.d.resetPos();
                        }
                        if (Keyboard.getEventKey() == 28) {
                            this.c.setSpawnPos((int)this.d.x, (int)this.d.y, (int)this.d.z, this.d.yRot);
                            this.d.resetPos();
                        }
                        if (Keyboard.getEventKey() == 34 && this.o == null && this.c.entities.size() < 256) {
                            this.c.entities.add(new Zombie(this.c, this.d.x, this.d.y, this.d.z));
                        }
                        if (Keyboard.getEventKey() == 48) {
                            this.a(new com.mojang.minecraft.b.d());
                        }
                        if (Keyboard.getEventKey() == 20 && this.o != null && this.o.a()) {
                            this.d.releaseAllKeys();
                            this.a(new com.mojang.minecraft.b.c());
                        }
                    }
                    for (int b2 = 0; b2 < 9; ++b2) {
                        if (Keyboard.getEventKey() == b2 + 2) {
                            this.d.inventory.b = b2;
                        }
                    }
                    if (Keyboard.getEventKey() == 21) {
                        this.D = -this.D;
                    }
                    if (Keyboard.getEventKey() != 33) {
                        continue;
                    }
                    final g z = this.z;
                    z.d = (z.d + ((Keyboard.isKeyDown(42) || Keyboard.isKeyDown(54)) ? -1 : 1) & 0x3);
                }
            }
            if (this.k == null && Mouse.isButtonDown(0) && this.G - this.N >= this.y.a / 4.0f && this.M) {
                this.e();
                this.N = this.G;
            }
        }
        if (this.k != null) {
            this.N = this.G + 10000;
        }
        if (this.k != null) {
            final f m = this.k;
            while (Mouse.next()) {
                m.d();
            }
            while (Keyboard.next()) {
                m.e();
            }
            if (this.k != null) {
                this.k.c();
            }
        }
        if (this.c != null) {
            final g z2 = this.z;
            ++z2.h;
            this.c.tickEntities();
            if (!this.g()) {
                this.c.tick();
            }
            final a a2 = this.A;
            for (int n4 = 0; n4 < a2.a.size(); ++n4) {
                final Particle particle;
                (particle = a2.a.get(n4)).tick();
                if (particle.removed) {
                    a2.a.remove(n4--);
                }
            }
            this.d.tick();
        }
    }
    
    private boolean g() {
        return this.o != null;
    }
    
    private void a(final float n) {
        GL11.glViewport(0, 0, this.a, this.b);
        final float n2 = (float)Math.pow(1.0f / (4 - this.z.d), 0.25);
        this.J = 0.6f * (1.0f - n2) + n2;
        this.K = 0.8f * (1.0f - n2) + n2;
        this.L = 1.0f * (1.0f - n2) + n2;
        this.J *= this.Q;
        this.K *= this.Q;
        this.L *= this.Q;
        final com.mojang.minecraft.level.a.a a;
        if ((a = com.mojang.minecraft.level.a.a.a[this.c.getTile((int)this.d.x, (int)(this.d.y + 0.12f), (int)this.d.z)]) != null && a.c() != com.mojang.minecraft.level.c.a.a) {
            final com.mojang.minecraft.level.c.a c;
            if ((c = a.c()) == com.mojang.minecraft.level.c.a.b) {
                this.J = 0.02f;
                this.K = 0.02f;
                this.L = 0.2f;
            }
            else if (c == com.mojang.minecraft.level.c.a.c) {
                this.J = 0.6f;
                this.K = 0.1f;
                this.L = 0.0f;
            }
        }
        GL11.glClearColor(this.J, this.K, this.L, 0.0f);
        GL11.glClear(16640);
        d("Set viewport");
        final float n3 = this.d.xRotO + (this.d.xRot - this.d.xRotO) * n;
        final float n4 = this.d.yRotO + (this.d.yRot - this.d.yRotO) * n;
        final com.mojang.minecraft.character.c c2 = new com.mojang.minecraft.character.c(this.d.xo + (this.d.x - this.d.xo) * n, this.d.yo + (this.d.y - this.d.yo) * n, this.d.zo + (this.d.z - this.d.zo) * n);
        final float n5 = (float)Math.cos(-n4 * 3.141592653589793 / 180.0 + 3.141592653589793);
        final float n6 = (float)Math.sin(-n4 * 3.141592653589793 / 180.0 + 3.141592653589793);
        final float n7 = (float)Math.cos(-n3 * 3.141592653589793 / 180.0);
        final float n8 = (float)Math.sin(-n3 * 3.141592653589793 / 180.0);
        final float n9 = n6 * n7;
        final float n10 = n8;
        final float n11 = n5 * n7;
        final float n12 = 5.0f;
        final com.mojang.minecraft.character.c c3 = c2;
        final float n13 = n9 * n12;
        final float n14 = n10 * n12;
        final float n15 = n11 * n12;
        final float n16 = n14;
        final float n17 = n13;
        final com.mojang.minecraft.character.c c4 = c3;
        this.P = this.c.clip(c2, new com.mojang.minecraft.character.c(c4.a + n17, c4.b + n16, c4.c + n15));
        d("Picked");
        this.Q = 1.0f;
        this.O = (float)(512 >> (this.z.d << 1));
        GL11.glMatrixMode(5889);
        GL11.glLoadIdentity();
        GLU.gluPerspective(70.0f, this.a / (float)this.b, 0.05f, this.O);
        GL11.glMatrixMode(5888);
        GL11.glLoadIdentity();
        GL11.glTranslatef(0.0f, 0.0f, -0.3f);
        GL11.glRotatef(this.d.xRotO + (this.d.xRot - this.d.xRotO) * n, 1.0f, 0.0f, 0.0f);
        GL11.glRotatef(this.d.yRotO + (this.d.yRot - this.d.yRotO) * n, 0.0f, 1.0f, 0.0f);
        GL11.glTranslatef(-(this.d.xo + (this.d.x - this.d.xo) * n), -(this.d.yo + (this.d.y - this.d.yo) * n), -(this.d.zo + (this.d.z - this.d.zo) * n));
        d("Set up camera");
        GL11.glEnable(2884);
        final com.mojang.minecraft.a.d a2 = com.mojang.minecraft.a.d.a();
        final g z = this.z;
        final com.mojang.minecraft.a.d d = a2;
        final g g = z;
        for (int i = 0; i < g.g.length; ++i) {
            g.g[i].a(d);
        }
        final g z2 = this.z;
        final Player d2 = this.d;
        final g g2 = z2;
        final TreeSet<com.mojang.minecraft.a.f> set;
        (set = new TreeSet<com.mojang.minecraft.a.f>(new com.mojang.minecraft.a.b(d2))).addAll(g2.f);
        int n18 = 4;
        final Iterator<com.mojang.minecraft.a.f> iterator = set.iterator();
        while (iterator.hasNext()) {
            final com.mojang.minecraft.a.f f;
            (f = iterator.next()).b();
            g2.f.remove(f);
            if (--n18 != 0) {
                continue;
            }
            break;
        }
        d("Update chunks");
        final boolean solid = this.c.isSolid(this.d.x, this.d.y, this.d.z, 0.1f);
        this.h();
        GL11.glEnable(2912);
        this.z.a(this.d, 0);
        if (solid) {
            final int n19 = (int)this.d.x;
            final int n20 = (int)this.d.y;
            final int n21 = (int)this.d.z;
            for (int j = n19 - 1; j <= n19 + 1; ++j) {
                for (int k = n20 - 1; k <= n20 + 1; ++k) {
                    for (int l = n21 - 1; l <= n21 + 1; ++l) {
                        this.z.a(j, k, l);
                    }
                }
            }
        }
        d("Rendered level");
        this.a(true);
        this.z.a(a2, n);
        this.a(false);
        this.h();
        d("Rendered entities");
        this.A.a(this.d, n);
        d("Rendered particles");
        GL11.glCallList(this.z.c);
        GL11.glDisable(2896);
        this.h();
        this.z.a(n);
        this.h();
        GL11.glEnable(2896);
        if (this.P != null) {
            GL11.glDisable(2896);
            GL11.glDisable(3008);
            this.z.a(this.d, this.P, this.E, this.d.inventory.a());
            com.mojang.minecraft.a.g.a(this.P, this.E);
            GL11.glEnable(3008);
            GL11.glEnable(2896);
        }
        GL11.glBlendFunc(770, 771);
        this.h();
        GL11.glCallList(this.z.c + 1);
        GL11.glEnable(3042);
        GL11.glColorMask(false, false, false, false);
        final int a3 = this.z.a(this.d, 1);
        GL11.glColorMask(true, true, true, true);
        if (a3 > 0) {
            final g z3 = this.z;
            GL11.glEnable(3553);
            GL11.glBindTexture(3553, z3.b.a("/terrain.png"));
            GL11.glCallLists(z3.e);
            GL11.glDisable(3553);
        }
        GL11.glDepthMask(true);
        GL11.glDisable(3042);
        GL11.glDisable(2896);
        GL11.glDisable(2912);
        GL11.glDisable(3553);
        if (this.P != null) {
            GL11.glDepthFunc(513);
            GL11.glDisable(3008);
            this.z.a(this.d, this.P, this.E, this.d.inventory.a());
            com.mojang.minecraft.a.g.a(this.P, this.E);
            GL11.glEnable(3008);
            GL11.glDepthFunc(515);
        }
    }
    
    private void a(final boolean b) {
        if (!b) {
            GL11.glDisable(2896);
            GL11.glDisable(16384);
            return;
        }
        GL11.glEnable(2896);
        GL11.glEnable(16384);
        GL11.glEnable(2903);
        GL11.glColorMaterial(1032, 5634);
        final float n = 0.7f;
        final float n2 = 0.3f;
        final com.mojang.minecraft.character.c a = new com.mojang.minecraft.character.c(0.0f, -1.0f, 0.5f).a();
        GL11.glLight(16384, 4611, this.a(a.a, a.b, a.c, 0.0f));
        GL11.glLight(16384, 4609, this.a(n2, n2, n2, 1.0f));
        GL11.glLight(16384, 4608, this.a(0.0f, 0.0f, 0.0f, 1.0f));
        GL11.glLightModel(2899, this.a(n, n, n, 1.0f));
    }
    
    public final void c() {
        final int n = this.a * 240 / this.b;
        final int n2 = this.b * 240 / this.b;
        GL11.glClear(256);
        GL11.glMatrixMode(5889);
        GL11.glLoadIdentity();
        GL11.glOrtho(0.0, (double)n, (double)n2, 0.0, 100.0, 300.0);
        GL11.glMatrixMode(5888);
        GL11.glLoadIdentity();
        GL11.glTranslatef(0.0f, 0.0f, -200.0f);
    }
    
    private void h() {
        GL11.glFog(2918, this.a(this.J, this.K, this.L, 1.0f));
        GL11.glNormal3f(0.0f, -1.0f, 0.0f);
        GL11.glColor4f(1.0f, 1.0f, 1.0f, 1.0f);
        final com.mojang.minecraft.level.a.a a;
        if ((a = com.mojang.minecraft.level.a.a.a[this.c.getTile((int)this.d.x, (int)(this.d.y + 0.12f), (int)this.d.z)]) != null && a.c() != com.mojang.minecraft.level.c.a.a) {
            final com.mojang.minecraft.level.c.a c = a.c();
            GL11.glFogi(2917, 2048);
            if (c == com.mojang.minecraft.level.c.a.b) {
                GL11.glFogf(2914, 0.1f);
                GL11.glLightModel(2899, this.a(0.4f, 0.4f, 0.9f, 1.0f));
            }
            else if (c == com.mojang.minecraft.level.c.a.c) {
                GL11.glFogf(2914, 2.0f);
                GL11.glLightModel(2899, this.a(0.4f, 0.3f, 0.3f, 1.0f));
            }
        }
        else {
            GL11.glFogi(2917, 9729);
            GL11.glFogf(2915, 0.0f);
            GL11.glFogf(2916, this.O);
            GL11.glLightModel(2899, this.a(1.0f, 1.0f, 1.0f, 1.0f));
        }
        GL11.glEnable(2903);
        GL11.glColorMaterial(1028, 4608);
        GL11.glEnable(2896);
    }
    
    private FloatBuffer a(final float n, final float n2, final float n3, final float n4) {
        this.U.clear();
        this.U.put(n).put(n2).put(n3).put(n4);
        this.U.flip();
        return this.U;
    }
    
    public final void a(final String v) {
        if (!this.r) {
            throw new StopGameException();
        }
        this.V = v;
        final int n = this.a * 240 / this.b;
        final int n2 = this.b * 240 / this.b;
        GL11.glClear(256);
        GL11.glMatrixMode(5889);
        GL11.glLoadIdentity();
        GL11.glOrtho(0.0, (double)n, (double)n2, 0.0, 100.0, 300.0);
        GL11.glMatrixMode(5888);
        GL11.glLoadIdentity();
        GL11.glTranslatef(0.0f, 0.0f, -200.0f);
    }
    
    public final void b(final String w) {
        if (!this.r) {
            throw new StopGameException();
        }
        this.W = w;
        this.a(-1);
    }
    
    public final void a(final int n) {
        if (!this.r) {
            throw new StopGameException();
        }
        final int n2 = this.a * 240 / this.b;
        final int n3 = this.b * 240 / this.b;
        GL11.glClear(16640);
        final com.mojang.minecraft.a.c a = com.mojang.minecraft.a.c.a;
        GL11.glEnable(3553);
        GL11.glBindTexture(3553, this.i.a("/dirt.png"));
        final float n4 = 32.0f;
        a.b();
        a.a(4210752);
        a.a(0.0f, (float)n3, 0.0f, 0.0f, n3 / n4);
        a.a((float)n2, (float)n3, 0.0f, n2 / n4, n3 / n4);
        a.a((float)n2, 0.0f, 0.0f, n2 / n4, 0.0f);
        a.a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f);
        a.a();
        if (n >= 0) {
            final int n5 = n2 / 2 - 50;
            final int n6 = n3 / 2 + 16;
            GL11.glDisable(3553);
            a.b();
            a.a(8421504);
            a.b((float)n5, (float)n6, 0.0f);
            a.b((float)n5, (float)(n6 + 2), 0.0f);
            a.b((float)(n5 + 100), (float)(n6 + 2), 0.0f);
            a.b((float)(n5 + 100), (float)n6, 0.0f);
            a.a(8454016);
            a.b((float)n5, (float)n6, 0.0f);
            a.b((float)n5, (float)(n6 + 2), 0.0f);
            a.b((float)(n5 + n), (float)(n6 + 2), 0.0f);
            a.b((float)(n5 + n), (float)n6, 0.0f);
            a.a();
            GL11.glEnable(3553);
        }
        this.j.a(this.V, (n2 - this.j.a(this.V)) / 2, n3 / 2 - 4 - 16, 16777215);
        this.j.a(this.W, (n2 - this.j.a(this.W)) / 2, n3 / 2 - 4 + 8, 16777215);
        Display.update();
        try {
            Thread.yield();
        }
        catch (Exception ex) {}
    }
    
    public final void b(final int n) {
        this.a(this.F.a((this.e != null) ? this.e.b : "anonymous", 128 << n, 128 << n, 64));
    }
    
    public final boolean a(final String s, int n) {
        final Level a;
        if ((n = (((a = this.l.a(this.f, s, n)) != null) ? 1 : 0)) == 0) {
            return false;
        }
        this.a(a);
        return true;
    }
    
    public final void a(final Level level) {
        this.c = level;
        if (this.z != null) {
            final g z;
            if ((z = this.z).a != null) {
                z.a.removeListener$74652038(z);
            }
            if ((z.a = level) != null) {
                level.addListener$74652038(z);
                z.a();
            }
        }
        if (this.A != null) {
            this.A.a.clear();
        }
        if (this.d != null) {
            this.d.setLevel(level);
            this.d.resetPos();
        }
        System.gc();
    }
    
    public final void c(String s) {
        final com.mojang.minecraft.b.a i = this.I;
        s = s;
        final com.mojang.minecraft.b.a a = i;
        i.a.add(0, new com.mojang.minecraft.b(s));
        while (a.a.size() > 50) {
            a.a.remove(a.a.size() - 1);
        }
    }
}
