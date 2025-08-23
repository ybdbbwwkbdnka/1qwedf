@@ .. @@
             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
-              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic select-all">{contractAddress}</code>
+              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
               <Button size="sm" variant="outline" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                 {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                 {copied ? "Copied" : "Copy"}
@@ .. @@
             <div className="flex gap-4">
               <Button
                 size="lg"
                 className="bg-gradient-brain hover:opacity-90 text-white px-8 transition-all duration-300 transform hover:scale-105"
                 onClick={() => alert("Trading will be available once contract is deployed!")}
               >
-                Buy Now
+                Buy $BRAIN
               </Button>
               <Button
                 size="lg"
                 variant="outline"
                 className="px-8 bg-transparent transition-all duration-300 transform hover:scale-105"
                 onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
               >
                 Join Community
               </Button>
             </div>
@@ .. @@
           <div className="grid md:grid-cols-2 gap-8">
             <a
               href="https://t.me/+5JUFhHohSIQ0YWVk"
               target="_blank"
               rel="noopener noreferrer"
-              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
+              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
             >
-              <div className="space-y-4">
-                <MessageCircle className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
-                <h3 className="font-bold text-xl">Telegram</h3>
-                <p className="text-gray-600">Join our active community chat</p>
+              <div className="flex items-center gap-4">
+                <div className="w-12 h-12 bg-gradient-brain rounded-full flex items-center justify-center text-white text-xl">
+                  💬
+                </div>
+                <div>
+                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Join Telegram</h3>
+                  <p className="text-gray-600 text-sm">Connect with the community</p>
+                </div>
               </div>
             </a>
             <a
               href="https://x.com/BRAIN__LET"
               target="_blank"
               rel="noopener noreferrer"
-              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
+              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
             >
-              <div className="space-y-4">
-                <Twitter className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform" />
-                <h3 className="font-bold text-xl">X (Twitter)</h3>
-                <p className="text-gray-600">Follow for updates and announcements</p>
+              <div className="flex items-center gap-4">
+                <div className="w-12 h-12 bg-gradient-brain rounded-full flex items-center justify-center text-white text-xl">
+                  🐦
+                </div>
+                <div>
+                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Follow on X</h3>
+                  <p className="text-gray-600 text-sm">Stay updated with latest news</p>
+                </div>
               </div>
             </a>
           </div>