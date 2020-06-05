
'use strict';

package com.mojang.minecraft;

public class MinecraftApplet
{
    private Canvas canvas;
    private d minecraft;
    private Thread thread;
    
    public MinecraftApplet() {
        this.thread = null;
    }
    
    @Override
    public void init() {
        this.canvas = new MinecraftApplet$1(this);
        this.minecraft = new d(this.canvas, this.getWidth(), this.getHeight(), false);
        this.minecraft.f = this.getDocumentBase().getHost();
        if (this.getDocumentBase().getPort() > 0) {
            final StringBuilder sb = new StringBuilder();
            final d minecraft = this.minecraft;
            minecraft.f = sb.append(minecraft.f).append(":").append(this.getDocumentBase().getPort()).toString();
        }
        if (this.getParameter("username") != null && this.getParameter("sessionid") != null) {
            this.minecraft.e = new a(this.getParameter("username"), this.getParameter("sessionid"));
            if (this.getParameter("mppass") != null) {
                this.minecraft.e.d = this.getParameter("mppass");
            }
        }
        if (this.getParameter("loadmap_user") != null && this.getParameter("loadmap_id") != null) {
            this.minecraft.m = this.getParameter("loadmap_user");
            this.minecraft.n = Integer.parseInt(this.getParameter("loadmap_id"));
        }
        else if (this.getParameter("server") != null && this.getParameter("port") != null) {
            final d minecraft2 = this.minecraft;
            final String parameter = this.getParameter("server");
            final int int1 = Integer.parseInt(this.getParameter("port"));
            final String p = parameter;
            final d d = minecraft2;
            minecraft2.p = p;
            d.q = int1;
        }
        this.minecraft.g = true;
        this.setLayout(new BorderLayout());
        this.add(this.canvas, "Center");
        this.canvas.setFocusable(true);
        this.validate();
    }
    
    public void startGameThread() {
        if (this.thread != null) {
            return;
        }
        (this.thread = new Thread(this.minecraft)).start();
    }
    
    @Override
    public void start() {
        this.minecraft.h = false;
    }
    
    @Override
    public void stop() {
        this.minecraft.h = true;
    }
    
    @Override
    public void destroy() {
        this.stopGameThread();
    }
    
    public void stopGameThread() {
        if (this.thread == null) {
            return;
        }
        this.minecraft.r = false;
        try {
            this.thread.join(1000L);
        }
        catch (InterruptedException ex2) {
            try {
                this.minecraft.a();
            }
            catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        this.thread = null;
    }
}
