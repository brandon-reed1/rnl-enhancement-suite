function drop(e){e.stopPropagation(),e.preventDefault();var a=e.originalEvent.dataTransfer.files[0];uploader_message.text("Processing");var t=a.name.lastIndexOf("."),o=a.name;-1!=t&&(o=a.name.substr(0,t)+"-"+Date.now()+a.name.substr(t));var n={Key:o,ContentType:a.type,Body:a,ACL:"public-read"};bucket.putObject(n,function(e){var t=github_comment_box.find("textarea");e?uploader_message.text("ERROR!"):(t.val(t.val()+"\n ["+a.name+"](https://s3.amazonaws.com/rnl-enhancement-suite/"+encodeURIComponent(o)+")"),uploader_message.text("Uploaded!"),setTimeout(function(){uploader_message.text("")},2e3))})}var github_comment_box=$(".write-content");if(github_comment_box){$(".write-content").append($("<div id='rnl-uploader-drop' class='rnl-uploader-drop'>Drop any file here <div class='rnl-uploader-message'></div></div>"));var bucket=new AWS.S3({params:{Bucket:"rnl-enhancement-suite"}}),uploader_message=$(".rnl-uploader-message"),dropbox=$("#rnl-uploader-drop");dropbox&&(dropbox.on("dragenter dragexit dragover",function(e){e.stopPropagation(),e.preventDefault()}),dropbox.on("drop",drop))}