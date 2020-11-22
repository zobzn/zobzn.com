---
title: wsl
date: 2020-11-22 23:39:52
---

### set cpu/memory usage

```powershell
# turn off all wsl instances such as docker-desktop
wsl --shutdown
notepad "%USERPROFILE%\.wslconfig"
```

```ini
[wsl2]
memory=3GB      # Limits VM memory in WSL 2 up to 3GB
processors=4    # Makes the WSL 2 VM use two virtual processors
```

### get host ip

```bash
echo $(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')
```

### get wsl ip

```bash
echo $(ip addr sh $(ip route list default | grep -Po ' dev \K\w+') | grep -Po ' inet \K[\d.]+')
```
