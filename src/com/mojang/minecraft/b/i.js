
package com.mojang.minecraft.b;

import java.io.Reader;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

public class i extends f implements Runnable
{
    private f g;
    private boolean h;
    private boolean i;
    private String[] j;
    private String k;
    protected String f;
    
    public i(final f g) {
        this.h = false;
        this.i = false;
        this.j = null;
        this.k = "";
        this.f = "Load level";
        this.g = g;
    }
    
    public void run() {
        try {
            this.k = "Getting level list..";
            this.j = new BufferedReader(new InputStreamReader(new URL("http://" + this.a.f + "/listmaps.jsp?user=" + this.a.e.b).openConnection().getInputStream())).readLine().split(";");
            if (this.j.length >= 5) {
                this.a(this.j);
                this.i = true;
                return;
            }
            this.k = this.j[0];
            this.h = true;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            this.k = "Failed to load levels";
            this.h = true;
        }
    }
    
    protected void a(final String[] array) {
        for (int i = 0; i < 5; ++i) {
            ((g)this.d.get(i)).g = !array[i].equals("-");
            ((g)this.d.get(i)).e = array[i];
            ((g)this.d.get(i)).h = true;
        }
    }
    
    @Override
    public final void a() {
        new Thread(this).start();
        for (int i = 0; i < 5; ++i) {
            this.d.add(new g(i, this.b / 2 - 100, this.c / 4 + i * 24, 200, 20, "---"));
            ((g)this.d.get(i)).h = false;
        }
        this.d.add(new g(5, this.b / 2 - 100, this.c / 4 + 144, 200, 20, "Cancel"));
    }
    
    @Override
    protected final void a(final g g) {
        if (!g.g) {
            return;
        }
        if (this.i && g.f < 5) {
            this.a(g.f);
        }
        if (this.h || (this.i && g.f == 5)) {
            this.a.a(this.g);
        }
    }
    
    protected void a(final int n) {
        this.a.a(this.a.e.b, n);
        this.a.a((f)null);
        this.a.b();
    }
    
    @Override
    public final void a(final int n, final int n2) {
        com.mojang.minecraft.b.f.a(0, 0, this.b, this.c, 1610941696, -1607454624);
        this.a(this.f, this.b / 2, 40, 16777215);
        if (!this.i) {
            this.a(this.k, this.b / 2, this.c / 2 - 4, 16777215);
        }
        super.a(n, n2);
    }
}
