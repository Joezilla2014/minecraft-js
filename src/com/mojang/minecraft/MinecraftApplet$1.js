
package com.mojang.minecraft;

import java.awt.Canvas;

final class MinecraftApplet$1 extends Canvas
{
    final /* synthetic */ MinecraftApplet this$0;
    
    MinecraftApplet$1(final MinecraftApplet this$0) {
        this.this$0 = this$0;
    }
    
    @Override
    public final synchronized void addNotify() {
        super.addNotify();
        this.this$0.startGameThread();
    }
    
    @Override
    public final synchronized void removeNotify() {
        this.this$0.stopGameThread();
        super.removeNotify();
    }
}
