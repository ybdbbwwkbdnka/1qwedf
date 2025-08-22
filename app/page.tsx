@@ .. @@
   const copyToClipboard = async () => {
     try {
-      await navigator.clipboard.writeText("Contract address will be available soon!")
+      if (contractAddress === "Contract Address Coming Soon...") {
+        await navigator.clipboard.writeText("Contract address will be available soon!")
+      } else {
+        await navigator.clipboard.writeText(contractAddress)
+      }
       setCopied(true)
       setTimeout(() => setCopied(false), 2000)
     } catch (err) {
@@ .. @@
             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
-              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
+              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic select-all">{contractAddress}</code>
               <Button size="sm" variant="outline" onClick={copyToClipboard} className="shrink-0 bg-transparent">
@@ .. @@
             <div className="flex gap-4">
               <Button
                 size="lg"
-                className="bg-gradient-brain hover:opacity-90 text-white px-8"
+                className="bg-gradient-brain hover:opacity-90 text-white px-8 transition-all duration-300 transform hover:scale-105"
                 onClick={() => alert("Trading will be available once contract is deployed!")}
               >
@@ .. @@
               <Button
                 size="lg"
                 variant="outline"
-                className="px-8 bg-transparent"
+                className="px-8 bg-transparent transition-all duration-300 transform hover:scale-105"
                 onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
               >
@@ .. @@
           <div className="flex justify-center lg:justify-end">
             <div className="relative">
-              <div className="w-80 h-80 lg:w-96 lg:h-96 animate-float">
+              <div className="w-80 h-80 lg:w-96 lg:h-96 animate-float will-change-transform">
                 <div className="w-full h-full bg-gradient-brain rounded-full flex items-center justify-center text-8xl animate-bounce-slow">
@@ .. @@
                 </div>
               </div>
-              <div className="absolute inset-0 bg-gradient-brain opacity-20 rounded-full blur-3xl animate-pulse-glow"></div>
+              <div className="absolute inset-0 bg-gradient-brain opacity-20 rounded-full blur-3xl animate-pulse-glow will-change-transform"></div>
             </div>
@@ .. @@
             <a
               href="https://t.me/+5JUFhHohSIQ0YWVk"
               target="_blank"
               rel="noopener noreferrer"
-              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
+              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
             >
@@ .. @@
             <a
               href="https://x.com/BRAIN__LET"
               target="_blank"
               rel="noopener noreferrer"
-              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-colors group"
+              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 transform hover:scale-105 group"
             >