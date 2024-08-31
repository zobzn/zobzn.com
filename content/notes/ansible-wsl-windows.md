---
title: ansible, wsl, windows
date: "2020-10-01 23:05:19"
---

## Установка wsl

само собой на windows 10, кажется начиная с 2004 версии

проверить установленную версию можно с помощью `winver`

### предварительная подготовка (активируем wsl )

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
shutdown /r
```

### обновить wsl kernel

https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel

### установить вторую версию wsl по умолчанию

```powershell
wsl --set-default-version 2
```

### выбрать дистрибутив linux по вкусу

например Ubuntu или Debian (полный список [здесь](https://aka.ms/wslstore))

### скачать

с помощью powershell

```powershell
Invoke-WebRequest -Uri https://aka.ms/wslubuntu2004 -OutFile wsl-ubuntu-2004.appx -UseBasicParsing
Invoke-WebRequest -Uri https://aka.ms/wsl-debian-gnulinux -OutFile wsl-debian.appx -UseBasicParsing
```

или wget

```bash
wget https://aka.ms/wslubuntu2004 -O wsl-ubuntu-2004.appx
wget https://aka.ms/wsl-debian-gnulinux -O wsl-debian.appx
```

### удаленить ранее установленного дистрибутива

при первой установке это как бы и не нужно  
а записал на всякий случай, например, на случай переустановки

```powershell
wsl --list
wsl --unregister Ubuntu-20.04
wsl --unregister Debian
Get-AppxPackage *ubuntu* | Remove-AppxPackage
Get-AppxPackage *debian* | Remove-AppxPackage
```

### установка дистрибутива

```powershell
wsl --list
Add-AppxPackage wsl-ubuntu-2004.appx
Add-AppxPackage wsl-debian.appx
wsl --set-default Ubuntu-20.04
wsl --set-default Debian
wsl --list
```

### первый запуск wsl (спросит предпочитаемый логин и пароль)

```powershell
wsl
```

## Настройка WSL

### беспарольный sudo (по желанию)

```bash
echo 'your-wsl-username ALL=(ALL) NOPASSWD: ALL' | sudo tee -a /etc/sudoers > /dev/null
```

### обновления

```bash
sudo apt -y update
sudo apt -y upgrade
sudo apt -y dist-upgrade
sudo apt -y autoremove
```

### установка ansible

со стопроцентно рабочим вариантом еще не определился, поэтому оставил в комментах еще вариант, который пробовал

```bash
# ubuntu - install ansible
sudo apt -y install python3 python3-pip
sudo pip3 install ansible pywinrm[credssp]

# debian - install ansible
# sudo apt -y install dirmngr
# echo "deb http://ppa.launchpad.net/ansible/ansible/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list > /dev/null
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 93C4A3FD7BB9C367
# sudo apt -y update
# sudo apt -y install ansible
# pip3 install pywinrm[credssp]
```

### установка предпочитаемой локали

```bash
sudo update-locale LANG=en_US.UTF8
```

## Подготовка windows к удаленному управлению (WinRM)

```powershell
(New-Object -TypeName System.Net.WebClient).DownloadFile("https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1", "ConfigureRemotingForAnsible.ps1")

powershell.exe -ExecutionPolicy ByPass -File ConfigureRemotingForAnsible.ps1 -Verbose -DisableBasicAuth -EnableCredSSP -SkipNetworkProfileCheck
```

### Проверка работоспособности WinRM

```powershell
$computer = "localhost"
$username = "your-win-username"
$password = ConvertTo-SecureString -String "your-win-password" -AsPlainText -Force
$cred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $username, $password
$session_option = New-PSSessionOption -SkipCACheck -SkipCNCheck -SkipRevocationCheck
Invoke-Command -ComputerName $computer -UseSSL -ScriptBlock { ipconfig } -Credential $cred -SessionOption $session_option
```

## Теперь можем использовать ansible в wsl для настройки windows

to be continued...
