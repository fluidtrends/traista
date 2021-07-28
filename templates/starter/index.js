class Template {
    get stack () {
        return "jayesse"
    }

    get packer () {
        return "papanache"
    }
    
    get archiveFiles() {
        return [
            "carmel/chunks/intro/**/*",
            "carmel/assets/en/images/logo.png", 
            "carmel/assets/en/images/logo-light.png", 
            "tsconfig.json"
        ]
    }

    get files() {
        return  [
          ".carmel.json",
          "carmel/assets/**/*"
        ]
    }
}

module.exports = Template