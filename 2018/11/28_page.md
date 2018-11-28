$ git checkout -p stash@{0} src/main/java/com/coopnc/migrator/event/AdminEventListener.java
diff --git b/src/main/java/com/coopnc/migrator/event/AdminEventListener.java a/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
index 9e37d86..8262ca6 100644
--- b/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
+++ a/src/main/java/com/coopnc/migrator/event/AdminEventListener.java
@@ -13,6 +13,7 @@ import org.quartz.JobDataMap;
 import org.quartz.JobDetail;
 import org.quartz.JobKey;
 import org.quartz.Scheduler;
+import org.quartz.SimpleScheduleBuilder;
 import org.quartz.Trigger;
 import org.quartz.Trigger.TriggerState;
 import org.quartz.TriggerBuilder;
Apply this hunk to index and worktree [y,n,q,a,d,/,e,?]? y
<stdin>:9: trailing whitespace.
import org.quartz.SimpleScheduleBuilder;
warning: 1 line adds whitespace errors.
<stdin>:9: trailing whitespace.
import org.quartz.SimpleScheduleBuilder;
warning: 1 line adds whitespace errors.
