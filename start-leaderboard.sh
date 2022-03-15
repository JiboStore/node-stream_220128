#!/bin/sh
export PROJPATH=~/dev/proj/goplay/goplay-sample
pushd $PROJPATH
osascript -e 'tell application "Terminal" to activate' \
  -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' \
  -e 'tell application "Terminal" to do script "export PROJPATH=~/dev/proj/goplay/goplay-sample" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "cd $PROJPATH/goplay-sdk" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "npm run start" in selected tab of the front window' \

osascript -e 'tell application "Terminal" to activate' \
  -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' \
  -e 'tell application "Terminal" to do script "export PROJPATH=~/dev/proj/goplay/goplay-sample" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "cd $PROJPATH/webpack-start" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "npm run start" in selected tab of the front window' \

osascript -e 'tell application "Terminal" to activate' \
  -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' \
  -e 'tell application "Terminal" to do script "export PROJPATH=~/dev/proj/goplay/goplay-sample" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "cd $PROJPATH/nuxt-start" in selected tab of the front window' \
  -e 'tell application "Terminal" to do script "npm run dev" in selected tab of the front window' \

# https://dougscripts.com/itunes/itinfo/keycodes.php
# cp /etc/hosts /etc/hosts.ori.bak # one time only!
# cp hosts_stormsweb /etc/hosts # one time only!
# PROJPATH=~/dev/proj/storms-web/nodejs
# LAZYPATH=~/dev/github/lazy_script/sfe/stormsweb

# export PROJPATH=~/dev/proj/storms-web/nodejs
# pushd $PROJPATH
# git clean -ffdx
# popd
# cp ~/dev/github/lazy_script/sfe/stormsweb/env.local ~/dev/proj/storms-web/nodejs/.env
# osascript -e 'tell application "Terminal" to activate' \
#   -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' \
#   -e 'tell application "Terminal" to do script "export PROJPATH=~/dev/proj/storms-web/nodejs" in selected tab of the front window' \
#   -e 'tell application "Terminal" to do script "cd $PROJPATH" in selected tab of the front window' \
#   -e 'tell application "Terminal" to do script "npm ci" in selected tab of the front window' \
#   -e 'tell application "Terminal" to do script "npm run dev" in selected tab of the front window' \
#   -e 'tell application "Google Chrome" to open location "https://localhost.develop.storms.com/"'
